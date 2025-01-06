import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://francescowild.com/",
  integrations: [preact(), sitemap()],
  prefetch: true
});