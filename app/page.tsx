import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Metrics from "@/components/metrics";
import FeaturesAdvanced from "@/components/features-advanced";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Metrics />
        <FeaturesAdvanced />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
