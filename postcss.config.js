export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: {},
		// ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
	},
};
