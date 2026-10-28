// smoothScroll.js
// Utility function to smoothly scroll to a section by its ID.
// Accounts for the fixed navbar height so section heading is not hidden.

export function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return

  const navbarHeight = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--navbar-height') || '68',
    10
  )

  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight

  window.scrollTo({ top, behavior: 'smooth' })
}

