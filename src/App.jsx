import "./App.css";
import CommunitySpotlight from "./components/extra-section/CommunitySpotlight";
import SeasonalGuide from "./components/extra-section/SeasonalGuide";
import FeaturedGardeners from "./components/FeaturedGardeners";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopTrendingTips from "./components/TopTrendingTips";
import BrowseTips from "./pages/BrowseTips";
import ExploreGardeners from "./pages/ExploreGardeners";
import Login from "./pages/Login";
import MyTips from "./pages/MyTips";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ShareTip from "./pages/ShareTip";
import TipDetails from "./pages/TipDetails";
import UpdateTip from "./pages/UpdateTip";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NotFound></NotFound>
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
