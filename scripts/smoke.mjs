// Smoke test: every public route returns 200 with a non-empty <main>.
import { chromium } from "playwright";

const BASE = process.env.TEST_BASE_URL ?? "http://localhost:3000";
const ROUTES = [
  "/",
  "/work",
  "/work/live-nation",
  "/work/nivells",
  "/work/evermart",
  "/craft",
  "/notes",
  "/about",
  "/colophon",
  "/contact",
  "/_design",
  "/sitemap.xml",
  "/robots.txt",
  "/opengraph-image",
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await ctx.newPage();

  let failures = 0;
  for (const route of ROUTES) {
    const response = await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
    const status = response?.status() ?? 0;
    const title = await page.title();
    const hasMain = (await page.locator("main").count()) > 0;
    const ok = status === 200 && (route.endsWith(".xml") || route.endsWith(".txt") || route === "/opengraph-image" || hasMain);
    console.log(
      `${ok ? "PASS" : "FAIL"}  ${status}  ${route.padEnd(28)}  ${title.slice(0, 50)}`,
    );
    if (!ok) failures++;
  }

  await browser.close();
  console.log(`\n${failures === 0 ? "PASS" : "FAIL"}  ${failures} failures`);
  process.exit(failures === 0 ? 0 : 1);
})();
