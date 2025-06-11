import './App.css';
import CallToActionSection from './sections/CallToActionSection';
import ContentSection from './sections/ContentSection';
import FeaturesSection from './sections/FeaturesSection';
import FormSection from './sections/FormSection';
import HeroSection from './sections/HeroSection';
import PricingSection from './sections/PricingSection';
import ShowCaseSection from './sections/ShowCaseSection';
import TeamSection from './sections/TeamSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="App w-full overflow-x-hidden">
      <HeroSection />
      <ContentSection />
      <FeaturesSection />
      <FormSection />
      <TestimonialsSection />
      <ShowCaseSection />
      <CallToActionSection />
      <TeamSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}

export default App;
