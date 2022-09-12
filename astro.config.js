import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [
		tailwind({
			config: {
				path: "tailwind.config.js",
				applyBaseStyles: false
			}
		}),
		prefetch(),
		image(),
		sitemap()
	]
});
