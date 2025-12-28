import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-onyx text-champagne-cream selection:bg-antique-gold selection:text-deep-onyx">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <InquiryForm />
      <Footer />
    </main>
  );
}
