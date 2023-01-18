import About from "./components/About";
import Contact from "./components/Contact";
import Experince from "./components/Experince";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experince/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
