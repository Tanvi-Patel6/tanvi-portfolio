import '@testing-library/jest-dom'

// Mock window.matchMedia for JSDOM test environments
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  })

  // Mock IntersectionObserver for JSDOM
  class MockIntersectionObserver {
    constructor(callback) {
      this.callback = callback
    }
    observe(element) {
      // Immediately trigger intersection in test environment
      this.callback([{ isIntersecting: true, target: element }])
    }
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  })
}
