/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./stories/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#E03155",
			text: "#191817",
			border: "#A4A4A4",
		},
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
	prefix: "tw-",
};
