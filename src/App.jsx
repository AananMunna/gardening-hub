import "./App.css";
import CommunitySpotlight from "./components/extra-section/CommunitySpotlight";
import SeasonalGuide from "./components/extra-section/SeasonalGuide";
import FeaturedGardeners from "./components/FeaturedGardeners";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopTrendingTips from "./components/TopTrendingTips";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShareTip from "./pages/ShareTip";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ShareTip></ShareTip>
      <Hero></Hero>
      <FeaturedGardeners></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
      <SeasonalGuide></SeasonalGuide>
      <CommunitySpotlight></CommunitySpotlight>
      <Footer></Footer>
    </div>
  );
}

export default App;
