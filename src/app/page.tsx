import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { DownloadSection } from "@/components/sections/download-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { SceneShell } from "@/components/three/scene-shell";

export default function HomePage() {
  return (
    <>
      <SceneShell />
      <Navbar />

      <main className="relative z-10 min-h-screen">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TechnologySection />
        <DownloadSection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}