import Navbar from "@/components/Navbar";
import SideHud from "@/components/SideHud";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Vertical Left HUD (Desktop) */}
      <SideHud />

      {/* Fixed Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area (offset by 5rem / 80px on desktop for HUD rail) */}
      <main className="lg:pl-20 pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
