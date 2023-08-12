import './App.css';

// Container
import { /*AboutUs,Chef, FindUs, Footer,*/ Header/*, Intro, Laurels, Menu */ } from './container'
import Navbar from './components/Navbar/Navbar';
import Discover from './container/Discover/Discover';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Discover />


    </>
  );
}

export default App;
