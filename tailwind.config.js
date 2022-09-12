/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.astro"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Roboto",
				serif: "Noto Serif"
			}
		}
	},
	plugins: [require("@catppuccin/tailwindcss")]
};
