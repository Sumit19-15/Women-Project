import HeroSection from "../components/landing/HeroSection";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";

export default function Home() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <HeroSection />
      <Features />
      <HowItWorks />
    </div>
  );
}
