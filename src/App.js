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




function App() {
  // SplashScreen
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second loading delay
  }, []);



  return (
    <>
      {/* SplashScreen */}
      {isLoading ? <SplashScreen /> : <div>
        <BrowserRouter>
          <Routes>

            <Route path='' element={<><div className='HOME'><Navbar /><Header /> <Discover /><Features />  <Menu /> <NewsLetter /></div></>} />

          </Routes>
        </BrowserRouter>
      </div>}

    </>
  );
}

export default App;
