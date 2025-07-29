import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  // Define un puerto fijo para que el host siempre sepa dónde encontrarlo
  server: {
    port: 5001,
    cors: true, // Habilita CORS si es necesario
  },
  preview: {
    port: 5001,
    cors: true, // Habilita CORS para la vista previa
  },
  plugins: [
    react(),
    // Agrega el plugin de federación
    federation({
      name: 'component_library_zalvadora',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/shared/presentation/components/Button/Button.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false, // Desactiva el preload de módulos para evitar conflictos con la federación
    target: 'esnext', // Asegúrate de que el código se compile a ESNext para compatibilidad con la federación
    minify: false, // Desactiva la minificación para facilitar la depuración
    cssCodeSplit: false, // Desactiva el split de CSS para evitar problemas con la federación
  },
})
