import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import BentoGrid from './components/Bento/BentoGrid';
import Profile from './components/Profile/Profile';
import Testimonials from "./components/Testimonials/Testimonials";
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Projects from "./components/ProjectCard/Projects";
import { Earth } from './components/Bento/Earth';
import MyApproaches from './components/MyApproaches/MyApproaches';








function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      // Simulate a loading process
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);
    
  return (
    <div className="">
      
      {loading ? (
        <Loader/>
      ) : (
        <div>
          <Header/>
          <Profile/>
          <About/>
          <BentoGrid/>
          <Skills/>
          <Education/>
          <Testimonials/>
          <Experience/>
          <Projects />
          <MyApproaches/>
          <Footer/>
        </div>
      )}
      
    </div>
  );
}

export default App;
