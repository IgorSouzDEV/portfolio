import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Habilidades } from "../components/Habilidades";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">      
      {/* Theme Toggle Button */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutMe />
        <Habilidades />
        <Projects />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}