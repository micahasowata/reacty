/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				ojuju: ["Ojuju", "sans-serif"],
				rethink: ["Rethink Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
