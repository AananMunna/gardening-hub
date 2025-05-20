import "./App.css";
import FeaturedGardeners from "./components/FeaturedGardeners";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturedGardeners></FeaturedGardeners>
      <Footer></Footer>
    </div>
  );
}

export default App;
