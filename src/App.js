import './App.css';

// Container
import { /*AboutUs,Chef, FindUs, Footer,*/ Header/*, Intro, Laurels, Menu */ } from './container'
import Navbar from './components/Navbar/Navbar';
import Discover from './container/Discover/Discover';
import Features from './components/Features/Features';



function App() {
 
 
  return (
    <>
      <Navbar />
      <Header />
      <Discover />
      <Features />


    </>
  );
}

export default App;
