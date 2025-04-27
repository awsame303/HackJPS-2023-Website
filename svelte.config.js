import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default: serverless Node.js;
			// e.g. runtime: 'nodejs18.x' or edge: true
		})
	}
};

export default config;
