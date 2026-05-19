import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Appointment } from "@/components/Appointment";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Gallery />
        <Appointment />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
