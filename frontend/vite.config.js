import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svelte from "@sveltejs/vite-plugin-svelte";
//import { getAliases } from "vite-aliases";
// import { ViteAliases } from 'vite-aliases'

// const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === "production";
	return {
		resolve: {
	  	alias: {
	  		"@": "/src",
	  	},
	  },
		//resolve: {
		//	alias: aliases,
		//},
		//plugins: [svelte(), ViteAliases()],
		plugins: [react()],
		// optimizeDeps: {
		//	exclude: ["@roxi/routify"],
		// },
		build: {
			minify: isProduction,
			brotliSize: true, // To Speed Up Build
			rollupOptions: {
				// Disabled Hashing as Netlify Does Hashing for us using Etag.
				output: {
					entryFileNames: `assets/[name].js`,
					chunkFileNames: `assets/[name].js`,
					assetFileNames: `assets/[name].[ext]`,
				},
			},
		},
	};
});
//export default {
//	plugins: [
//		ViteAliases()
//	]
//};
