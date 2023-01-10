/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#f06543',
					1: '#ed4337',
					2: '#f06543'
				},
				white: {
					DEFAULT: '#ffffff',
					1: '#e8e9eb'
				},
				black: {
					DEFAULT: '#000000',
					1: '#000011'
				}
			},
			boxShadow: {
				primary: '-5px 5px 10px 0px gray',
				secondary: '0 0 20px 5px #ebb8ac'
			}
		}
	},
	plugins: [],
	corePlugins: {
		container: false
	}
};
