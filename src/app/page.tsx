import HeroSection from "@/components/home/HeroSection";
import BrandAmbassador from "@/components/home/BrandAmbassador";
import AboutSection from "@/components/home/AboutSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ShopByCategory from "@/components/home/ShopByCategory";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ShopByCategory />
      <FeaturesSection />
      <BrandAmbassador />
      <ProductShowcase />
      <AboutSection />
      <CTASection />
    </main>
  );
}
