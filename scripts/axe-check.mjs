// Axe-core accessibility check across all routes in both themes.
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const BASE = process.env.TEST_BASE_URL ?? "http://localhost:3000";
const ROUTES = [
  "/",
  "/work",
  "/work/live-nation",
  "/craft",
  "/about",
  "/colophon",
  "/contact",
  "/notes",
  "/_design",
];

const THEMES = ["dark", "light"];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await ctx.newPage();

  let totalViolations = 0;
  for (const theme of THEMES) {
    await page.addInitScript((t) => {
      try {
        localStorage.setItem("theme", t);
      } catch {}
    }, theme);

    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const violations = results.violations;
      console.log(
        `${theme.padEnd(6)} ${route.padEnd(24)} violations=${violations.length}`,
      );
      for (const v of violations) {
        console.log(`    ${v.id} (${v.impact}) - ${v.help}`);
        for (const node of v.nodes.slice(0, 3)) {
          console.log(`      target: ${node.target.join(", ")}`);
        }
      }
      totalViolations += violations.length;
    }
  }
  console.log(
    `\nTotal violations across all routes & themes: ${totalViolations}`,
  );
  await browser.close();
  process.exit(totalViolations > 0 ? 1 : 0);
})();
