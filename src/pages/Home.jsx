import Navbar from '../components/Navbar'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>      
        <Navbar />
        <HeroSection />
        <About />
        <Project />
        <Contact />
    </div>
  )
}

export default Home