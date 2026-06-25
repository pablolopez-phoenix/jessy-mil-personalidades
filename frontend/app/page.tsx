import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dossier from "@/components/Dossier";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ReportForm from "@/components/ReportForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Dossier />
      <Timeline />
      <Gallery />
      <Testimonials />
      <ReportForm />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
