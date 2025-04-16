import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import AchievementSection from '../components/AchievementSection'
import Testimonials from '../components/Testimonials'
import SkillsStrip from '../components/SkillsStrip';

const Home = () => {
  return (
    <div className='overflow-x-hidden '>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <HeroSection />
      <SkillsStrip />
      <About />
      <Project />
      <div className='hidden'>
      <AchievementSection />
      </div>
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home;
