import "./App.css";
import DarkLightTest from "./components/DarkLightTest";
import CommunitySpotlight from "./components/extra-section/CommunitySpotlight";
import SeasonalGuide from "./components/extra-section/SeasonalGuide";
import FeaturedGardeners from "./components/FeaturedGardeners";
import Hero from "./components/Hero";
import TopTrendingTips from "./components/TopTrendingTips";

function App() {
  return (
    <div>
      <DarkLightTest></DarkLightTest>
      <Hero></Hero>
      <FeaturedGardeners></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
      <SeasonalGuide></SeasonalGuide>
      <CommunitySpotlight></CommunitySpotlight>
    </div>
  );
}

export default App;
