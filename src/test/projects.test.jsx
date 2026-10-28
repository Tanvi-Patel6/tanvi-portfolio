import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import ProjectDetail from '../pages/ProjectDetail'
import NotFound from '../pages/NotFound'
import App from '../App'

describe('Resume download', () => {
  it('downloads the resume PDF from the hero button', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume.pdf')
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'download',
      'Tanvi_Patel_Resume.pdf'
    )
  })
})

describe('Contact links', () => {
  it('opens a Gmail compose window addressed to the portfolio email', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: /Direct Email/i })).toHaveAttribute(
      'href',
      'https://mail.google.com/mail/?view=cm&fs=1&to=tannapatel258%40gmail.com'
    )
  })
})

describe('Project Gallery & Filtering', () => {
  it('renders all initial project cards (HealthyTrack & Farm Fusion)', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    )

    expect(screen.getByText('HealthyTrack')).toBeInTheDocument()
    expect(screen.getByText('Farm Fusion')).toBeInTheDocument()
  })

  it('filters project cards by technology', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    )

    // HealthyTrack has 'Node.js', Farm Fusion does not
    const nodeFilter = screen.getByRole('tab', { name: 'Node.js' })
    fireEvent.click(nodeFilter)

    expect(screen.getByText('HealthyTrack')).toBeInTheDocument()
    expect(screen.queryByText('Farm Fusion')).not.toBeInTheDocument()

    // Switch back to All
    const allFilter = screen.getByRole('tab', { name: 'All' })
    fireEvent.click(allFilter)
    expect(screen.getByText('HealthyTrack')).toBeInTheDocument()
    expect(screen.getByText('Farm Fusion')).toBeInTheDocument()
  })
})

describe('Project Routing & Navigation', () => {
  it('renders HealthyTrack detail route with overview and placeholders', () => {
    render(
      <MemoryRouter initialEntries={['/project/healthytrack']}>
        <Routes>
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1, name: 'HealthyTrack' })).toBeInTheDocument()
    expect(screen.getByText('Project Overview')).toBeInTheDocument()
    expect(screen.getByText(/Live Demo \(URL Pending\)/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Repository/i })).toHaveAttribute(
      'href',
      'https://github.com/Tanvi-Patel6/HealthyTrack-React-Version'
    )
  })

  it('renders Farm Fusion detail route with documented project details', () => {
    render(
      <MemoryRouter initialEntries={['/project/farmfusion']}>
        <Routes>
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Farm Fusion' })).toBeInTheDocument()
    expect(screen.getByText(/React and Bootstrap frontend, a PHP backend, and a relational MySQL database/i)).toBeInTheDocument()
    expect(screen.getByText(/Direct Farmer-to-Buyer Marketplace/i)).toBeInTheDocument()
    expect(screen.getByText(/Subsidy & Government Schemes Hub/i)).toBeInTheDocument()
    expect(screen.getByText(/Shopping Cart, Wishlist & Invoicing/i)).toBeInTheDocument()
    expect(screen.getByText('PHP')).toBeInTheDocument()
    expect(screen.getByText('MySQL')).toBeInTheDocument()
  })

  it('handles invalid project ID with 404 project error card', () => {
    render(
      <MemoryRouter initialEntries={['/project/invalid-slug-123']}>
        <Routes>
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Project Not Found')).toBeInTheDocument()
    expect(screen.getByText('invalid-slug-123')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Return to Portfolio/i })).toBeInTheDocument()
  })

  it('handles general invalid route with 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/some/unknown/path']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Return to Homepage/i })).toBeInTheDocument()
  })
})
