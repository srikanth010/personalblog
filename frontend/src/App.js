import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import GrayBox from './components/GrayBox';
import ImageGrid from './components/ImageGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <GrayBox />
      <ImageGrid />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
