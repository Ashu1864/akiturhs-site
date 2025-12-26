import HomeHero from '../components/HomeHero';
import HomeServicesPreview from '../components/HomeServicesPreview';
import HomeWhyUs from '../components/HomeWhyUs';
import HomeTechStrip from '../components/HomeTechStrip';
import HomeStats from '../components/HomeStats';

export default function HomePage() {
  return (
    <div className="bg-[#020B1F] min-h-screen">
      <HomeHero />
      <HomeServicesPreview />
      <HomeWhyUs />
      <HomeTechStrip />
      <HomeStats />
    </div>
  );
}
