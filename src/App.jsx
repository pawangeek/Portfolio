import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import './assets/carousel.css';
import './assets/main.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <About/>
        <Experience/>
        <Skills/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default App;
