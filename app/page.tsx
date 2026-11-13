import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import TechCloud from '@/components/TechCloud';
import Process from '@/components/Process';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import CaseStudy from '@/components/CaseStudy';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <Hero />
      <main className="w">
        <Skills />
        <TechCloud />
        <Process />
        <About />
        <Projects />
        <Journey />
        <CaseStudy />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
