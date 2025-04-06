import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import AchievementSection from '../components/AchievementSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className='overflow-x-hidden bg-white'>
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
      <About />
      <Project />
      <AchievementSection />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home;
