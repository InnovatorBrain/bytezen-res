import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Container
import { /*Chef, FindUs, Footer,*/ Header/*, Intro, Laurels*/, Menu, BookTableCon, AboutUs } from './container'
import Navbar from './components/Navbar/Navbar';
import Discover from './container/Discover/Discover';
import Features from './components/Features/Features';
import NewsLetter from './container/NewsLetter/NewsLetter';
import SubHeading from './components/SubHeading/SubHeading'
import SplashScreen from './components/SplashScreen/SplashScreen';
import AnimeCounter from './components/AnimCounter/AnimeCounter';
import Menuitem from './components/Menuitem/Menuitem';

// import BottomSlide from './components/BottomSlide/BottomSlide';
import Footer from './components/Footer/Footer';

// About Us
import SportLogos from './components/SportLogos/SportLogos';
import YouTubeVideo from './components/YouTubeVideo/YouTubeVideo';

// Gallery
import GalleryMain from './container/Gallery/GalleryMain';
// ContactHeader
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactMain from './components/ContactMain/ContactMain';
import Contactways from './components/Contactways/Contactways';
// Shop
import ShopMain from './components/ShopMain/ShopMain';


function App() {
  // SplashScreen
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 2-second loading delay
  }, []);



  return (
    <>
      {/* SplashScreen */}
      {isLoading ? <SplashScreen /> :
        <BrowserRouter>
          <Routes>

            <Route path="" element={<><div className='HOME'><Navbar /><Header /> <Discover /><Features />  <Menu /> <NewsLetter /> <AnimeCounter /> <BookTableCon /> <Footer /></div></>} />
            <Route path="/bytezen-res" element={<><div className='HOME'><Navbar /><Header /> <Discover /><Features />  <Menu /> <NewsLetter /> <AnimeCounter /> <BookTableCon /> <Footer /></div></>} />
            <Route path='/Home' element={<><div className='HOME'><Navbar /><Header /> <Discover /><Features />  <Menu /> <NewsLetter /> <AnimeCounter /><BookTableCon /> <Footer /></div></>} />


            <Route path='/AboutUs' element={<><div className='ABOUTUS'><Navbar /> <AboutUs title="About Us" />
              <SubHeading hint="WHO WE ARE" title="We Invite You to Visit Our Restaurant" text="Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur! Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur!" />
              <SportLogos /> <AnimeCounter /><YouTubeVideo videoId="NC9KlaxtfLg" /> <Features /> <NewsLetter /> <Footer /></div></>} />


            <Route path='/Gallery' element={<><div className='GALLERY'><Navbar /> <AboutUs title="Gallery" />
              <SubHeading hint="GALLERY" title="Our Best Moments" text="Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam." />
              <GalleryMain />
              <Footer /> </div></>} />


            <Route path='/Menu' element={<><div className='GALLERY'><Navbar /> <AboutUs title="MENU LIST" />
              <SubHeading hint="YOUR'S CHOICE" title="Global Flavors Feast" text="menu category. Indulge in a symphony of tastes and aromas as we bring you the best dishes from various corners of the globe. " />
              {/* for morning */}
              <Menuitem />
              <Menu /><Footer /> </div></>} />


            <Route path='/Contact' element={<><div className='GALLERY'>
              <Navbar />
              <ContactHeader />
              <SubHeading hint="GET IN TOUCH" title="Contact Information" text="Porro eveniet, autem ipsam vitae consequatur!" />
              <Contactways />
              <ContactMain />
              <Footer />
            </div></>}
            />


            <Route path='/Book-Table' element={<><div className='HOME'><Navbar /> <AboutUs title="Secure Table" /> <BookTableCon /> <AnimeCounter /> <NewsLetter /> <Footer /></div></>} />


            <Route path='/Shop' element={<><div className='HOME'><Navbar /> <AboutUs title="Shop" /> <ShopMain /><Footer /></div></>} />


          </Routes>
        </BrowserRouter>
      }

    </>
  );
}

export default App;
