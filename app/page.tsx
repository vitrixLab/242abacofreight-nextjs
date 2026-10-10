import ContactSection from "@/components/ContactSection";
import FamilySection from "@/components/FamilySection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SpecialSection from "@/components/SpecialSection";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <SpecialSection />
        <FamilySection />
        <ServicesSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
