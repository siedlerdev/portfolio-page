import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const demoUrl =
  "https://storybook-page-builder.vercel.app/?path=/story/storybook-page-builder--runtime&tab=storybook-page-builder/tab";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const outputPath = path.join(
  projectRoot,
  "public",
  "project-previews",
  "storybook-page-builder.png",
);

await mkdir(path.dirname(outputPath), { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 960 },
  deviceScaleFactor: 1,
});

try {
  await page.goto(demoUrl, {
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });
  await page.waitForSelector("body", { state: "visible", timeout: 30_000 });
  await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {
    // Storybook can keep long-lived requests open; the screenshot is still useful.
  });
  await page.waitForTimeout(3_000);
  await page.screenshot({ path: outputPath, fullPage: false });
  console.log(`Saved preview screenshot to ${outputPath}`);
} finally {
  await browser.close();
}
