import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Installation } from "@/components/sections/Installation";
import { Documentation } from "@/components/sections/Documentation";
import { Roadmap } from "@/components/sections/Roadmap";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Installation />
      <Documentation />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
