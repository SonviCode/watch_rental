import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// https://dev.to/pacheco/configure-vitest-with-react-testing-library-5cbb
afterEach(() => {
  cleanup()
})
