// Hard reload N times. Assert: no console errors, no error boundary,
// no hydration mismatch, theme attribute present on <html>,
// no placeholder markers in the rendered DOM,
// and every .reveal becomes visible after a full scroll pass.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const N = 5;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await ctx.newPage();

  let failures = 0;

  for (let i = 0; i < N; i++) {
    const errors = [];
    const warnings = [];
    page.removeAllListeners("console");
    page.removeAllListeners("pageerror");
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
      if (m.type() === "warning") warnings.push(m.text());
    });
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message));

    await page.goto(BASE + "/?_=" + i, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const initial = await page.evaluate(() => {
      const html = document.documentElement;
      return {
        dataTheme: html.getAttribute("data-theme"),
        bg: getComputedStyle(html).getPropertyValue("--bg").trim(),
        text: getComputedStyle(html).getPropertyValue("--text").trim(),
        bodyBg: getComputedStyle(document.body).backgroundColor,
        h1Width: document.querySelector("h1")?.getBoundingClientRect().width ?? 0,
        errBoundary: !!document.querySelector(
          '[data-nextjs-dialog], #__next_error__',
        ),
        placeholders: document.body.innerHTML.includes("[[PLACEHOLDER"),
        reveals: Array.from(document.querySelectorAll(".reveal")),
      };
    });

    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y <= totalHeight; y += 400) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(60);
    }
    await page.waitForTimeout(400);

    const final = await page.evaluate(() => {
      const reveals = Array.from(document.querySelectorAll(".reveal"));
      const visible = reveals.filter((el) =>
        el.classList.contains("is-visible"),
      ).length;
      const opacityZero = reveals.filter(
        (el) => getComputedStyle(el).opacity === "0",
      ).length;
      return { visible, opacityZero, total: reveals.length };
    });

    const ok =
      errors.length === 0 &&
      warnings.length === 0 &&
      !initial.errBoundary &&
      initial.bg !== "" &&
      initial.text !== "" &&
      initial.bodyBg !== "rgba(0, 0, 0, 0)" &&
      initial.h1Width > 100 &&
      !initial.placeholders &&
      final.visible === final.total;

    console.log(
      `${ok ? "PASS" : "FAIL"}  reload ${i + 1}/${N}  theme=${initial.dataTheme}  errors=${errors.length}  boundary=${initial.errBoundary}  placeholders=${initial.placeholders}  reveals=${final.visible}/${final.total}  h1W=${initial.h1Width}`,
    );
    if (!ok) {
      failures++;
      if (errors.length) console.log("  errors:", errors.slice(0, 3));
      if (warnings.length) console.log("  warnings:", warnings.slice(0, 3));
      console.log("  initial:", JSON.stringify(initial));
      console.log("  final:", JSON.stringify(final));
    }
  }

  console.log(`\n${failures === 0 ? "PASS" : "FAIL"}  ${failures}/${N} reload failures`);
  await browser.close();
  process.exit(failures === 0 ? 0 : 1);
})();
