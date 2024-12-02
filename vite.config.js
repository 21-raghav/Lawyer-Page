import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5173',
    },
  },
  plugins: [react()],
  base: "https://21-raghav.github.io/Lawyer-Page/",
});
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
  
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://21-raghav.github.io/Lawyer-Page/',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//         configure: (proxy) => {
//           proxy.on('proxyRes', (proxyRes) => {
//             proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//           });
//         },
//       },
//     },
//   },
//   plugins: [react()],
//   base: "https://21-raghav.github.io/Lawyer-Page/",
// });
