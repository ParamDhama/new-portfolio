import Navbar from '../components/Navbar'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import AchievementSection from '../components/AchievementSection'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>      
        <Navbar />
        <HeroSection />
        <About />
        <Project />
        <AchievementSection/>
        <Contact />
    </div>
  )
}

export default Home