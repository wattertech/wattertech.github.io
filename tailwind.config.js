/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{astro,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "PT Sans",
				serif: "Noto Serif"
			}
		}
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			defaultFlavour: "mocha"
		})
	]
};
