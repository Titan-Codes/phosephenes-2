/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxs: "300px",
		    // => @media (min-width: 300px) { ... }

			xs: "390px",
		    // => @media (min-width: 390px) { ... }
            s: "480px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				monts: ["Montserrat", "sans-serif"],
			},
			width: {
				'128': '32rem',
			  },
			height: {
				'128': '32rem',
			  },
			  
			 
		},
		backgroundImage:{
			'video': "url('assets/video.gif')",
			'gradient-hero': "linear-gradient(12deg,rgba(80,17,85,1)0%,rgba(134,23,93,0.28999999165534973)7.878462225198746%,rgba(42,11,59,0.44999998807907104)40.75323939323425%,rgba(16,5,33,1)69.86356973648071%)"
		}
	},
	plugins: [
		require('tailwindcss-debug-screens'),
		require('@tailwindcss/forms'),
	  ]
};
