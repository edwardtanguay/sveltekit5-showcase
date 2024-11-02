import { join } from 'path'
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { theme002 } from './theme002';

const config = {
	darkMode: 'class',
		content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [theme002]
			}
		})
	]
} satisfies Config;

export default config;
