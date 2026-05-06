import HeroBanner from "../components/HeroBanner";
import FeaturesMarquee from "../components/FeaturesMarquee";
import FeaturedTiles from "../components/FeaturedTiles";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <FeaturesMarquee />
      <FeaturedTiles />
    </div>
  );
}
