import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Issues from "@/components/sections/Issues";
import Importance from "@/components/sections/Importance";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Issues />
        <Importance />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
