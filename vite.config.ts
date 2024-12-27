
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import { robots } from "vite-plugin-robots";
// import createSvgSpritePlugin from "vite-plugin-svg-sprite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    robots({}),
    // createSvgSpritePlugin({
    //   symbolId: "icon-[name]-[hash]",
    //   include: ["**/sprite/**.svg"],
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
        tailwindcss(),
      ],
    },
    
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "./",
});
