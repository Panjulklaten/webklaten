import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ProofSection from "@/components/ProofSection";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <ProofSection />
        <Portfolio />
        <Pricing />
        <Features />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
