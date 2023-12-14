import './App.css'
import BodyLayout from './BodyLayout'
import About from './components/AboutSection'
import Contact from './components/Contact'
import FloatingChat from './components/FloatingChat'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BodyLayout>
        <About/>
        <WhyChooseUs/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </BodyLayout>
      <FloatingChat/>
    </>
  )
}

export default App
