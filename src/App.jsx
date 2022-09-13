import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />

      <About />

      <Skills />

      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;