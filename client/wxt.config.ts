import { defineConfig } from "wxt";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

const alias = (p: string) => path.resolve(__dirname, p);

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ["@wxt-dev/module-react"],
	vite: () => ({
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@popup": alias("./entrypoints/popup/"),
			},
		},
	}),
});
