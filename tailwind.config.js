module.exports = {
	content: ['{pages,src}/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	important: true, // important in prod
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['corporate', 'dracula'],
	},
};
