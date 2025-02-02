import { defineConfig } from 'vitest/config'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['./src/**/*.spec.ts'],
    exclude: ['**/*.e2e-spec.ts'],
  },
  plugins: [viteTsconfigPaths()],
})
