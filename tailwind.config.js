/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins"],
			},
			animation: {
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				"scroll-vertical":
					"scroll-vertical var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
				"scroll-vertical": {
					to: {
						transform: "translateY(calc(-50% - 0.5rem))",
					},
				},
			},
			colors: {
				lightblue: "#F5F8FB",
				lightgreen: "#75EBBC",
				sky: "#64C9EA",
				white60: "#FFFFFF99",
				black900: "#0A0822",
				purple4: "#2E20880A",
				black600: "#4B4B51",
				borderColor: "#E9EBEE",
				black300: "#3C3C3C",
				grey: "#6A6A6C",
				borderColor10: "#E9E9E9",
			},
			boxShadow: {
				default: "0px 2px 16px 0px rgba(46, 32, 136, 0.04)",
				purpleShadow: "0px 2px 16px 0px rgba(46, 32, 136, 0.02)",
			},
			backdropBlur: {
				custom: "16px",
				grey: "#6A6A6C",
				blue: "#0A0822",
			},
			backgroundImage: {
				"btn-gradient":
					"linear-gradient(139.98deg, #75EBBC -27.15%, #64C9EA 112.3%)",
			},
		},
	},
	plugins: [],
};
