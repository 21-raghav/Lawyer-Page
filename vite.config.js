// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': 'http://localhost:5000',
//     },
//   },
//   plugins: [react()],
//   base: "https://21-raghav.github.io/Lawyer-Page/",
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress", // Uses Brotli compression
      ext: ".br", // File extension for Brotli compressed files
    }),
    compression({
      algorithm: "gzip", // Uses Gzip compression as fallback
      ext: ".gz", // File extension for Gzip compressed files
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://21-raghav.github.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on("proxyRes", (proxyRes) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
          });
        },
      },
    },
  },
});
