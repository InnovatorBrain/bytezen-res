import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Container
import { /*AboutUs,Chef, FindUs, Footer,*/ Header/*, Intro, Laurels*/, Menu } from './container'
import Navbar from './components/Navbar/Navbar';
import Discover from './container/Discover/Discover';
import Features from './components/Features/Features';
import NewsLetter from './container/NewsLetter/NewsLetter';
import SplashScreen from './components/SplashScreen/SplashScreen';
import AnimeCounter from './components/AnimCounter/AnimeCounter';




function App() {
  // SplashScreen
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating a 2-second loading delay
  }, []);



  return (
    <>
      {/* SplashScreen */}
      {isLoading ? <SplashScreen /> : <div>
        <BrowserRouter>
          <Routes>

            <Route path='' element={<><div className='HOME'><Navbar /><Header /> <Discover /><Features />  <Menu /> <NewsLetter /> <AnimeCounter/></div></>} />
            <Route path='/Home' element={<><div className='HOME'><Navbar /><Header /> <Discover /><Features />  <Menu /> <NewsLetter /> <AnimeCounter/></div></>} />
            <Route path='/AboutUs' element={<><div className='HOME'><Navbar /><NewsLetter /> <AnimeCounter/></div></>} />

          </Routes>
        </BrowserRouter>
      </div>}

    </>
  );
}

export default App;
