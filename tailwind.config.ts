import { join } from 'path'
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { theme001 } from './theme001';

const config = {
	darkMode: 'class',
		content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [theme001]
			}
		})
	]
} satisfies Config;

export default config;
