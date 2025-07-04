import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Homepage from './pages/Homepage'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import ConsultationForm from './pages/ConsultationForm'
import ScrollToTopCircle from './pages/ScrollToTopCircle'
import RoyalWedding from './pages/RoyalWedding'
import ExperienceDetail from './pages/ExperienceDetail'
import About from './pages/About'
import CulturalExhibitions from './pages/CulturalExhibitions'
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import TestimonialsUnifiel from './pages/TestimonialsUnifiel '
import Private from './pages/Private'

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Service' element={<Services />} />
        <Route path='/book' element={<ConsultationForm />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/wedding' element={<RoyalWedding />} />
        <Route path='/exhibitions' element={<CulturalExhibitions />} />
        <Route path='/details/:id' element={<ExperienceDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonials' element={<TestimonialsUnifiel />} />
        <Route path='/celebration' element={<Private />} />
      </Routes>
      <Footer />
      <ScrollToTopCircle />
    </>
  )
}

export default App