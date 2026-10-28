// App.jsx — Root Application with React Router
// Manages global layout: Navbar, Routable Views (Home, ProjectDetail, 404), Footer, and BackToTop.

import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import BackToTop from './components/ui/BackToTop'

import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {/* Persistent Sticky Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Dynamic Views via React Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Persistent Footer */}
      <Footer />

      {/* Floating Back to Top Control */}
      <BackToTop />
    </>
  )
}
