import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

import { defineWorkspace } from 'vitest/config'

import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineWorkspace([
  'vite.config.ts',
  {
    extends: 'vite.config.ts',
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
      storybookTest({ configDir: path.join(dirname, '.storybook') }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright',
      },
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@/components': resolve(
          __dirname,
          './src/shared/presentation/components'
        ),
        '@/styles': resolve(__dirname, './src/shared/presentation/styles'),
        '@/types': resolve(__dirname, './src/shared/domain/types'),
        '@/utils': resolve(__dirname, './src/shared/application/utils'),
        '@/hooks': resolve(__dirname, './src/shared/application/hooks'),
        '@/constants': resolve(__dirname, './src/shared/domain/constants'),
        '@/assets': resolve(__dirname, './src/assets'),
      },
    },
  },
])
