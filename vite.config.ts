import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [houdini(), sveltekit()],
	resolve: {
		alias: {
			$houdini: path.resolve('.', '.houdini'),
		},
	},
});
