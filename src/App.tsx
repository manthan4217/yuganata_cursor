import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Chatbot } from "@/components/chat/chatbot"
import { HeroSection } from "@/components/sections/hero"
import { StatsBar } from "@/components/sections/stats-bar"
import { VisionSection } from "@/components/sections/vision"
import { ProductsSection } from "@/components/sections/products"
import { ServicesSection } from "@/components/sections/services"
import { IndustriesSection } from "@/components/sections/industries"
import { AthithyaProductSection } from "@/components/sections/athithya-product"
import { ComparisonSection } from "@/components/sections/comparison"
import { TechnologySection } from "@/components/sections/technology"
import { ValuesSection } from "@/components/sections/values"
import { FoundersSection } from "@/components/sections/founders"
import { EarlyAccessSection } from "@/components/sections/early-access"
import { HowWeBuildSection } from "@/components/sections/how-we-build"
import { RoadmapSection } from "@/components/sections/roadmap"
import { FutureVisionSection } from "@/components/sections/future-vision"
import { FaqSection } from "@/components/sections/faq"
import { CareersSection } from "@/components/sections/careers"
import { ContactSection } from "@/components/sections/contact"

export default function App() {
  return (
    <div className="dark min-h-screen bg-void light:bg-zinc-50">
      <Navbar />
      <Chatbot />
      <main>
        <HeroSection />
        <StatsBar />
        <VisionSection />
        <ProductsSection />
        <ServicesSection />
        <IndustriesSection />
        <AthithyaProductSection />
        <ComparisonSection />
        <TechnologySection />
        <ValuesSection />
        <FoundersSection />
        <EarlyAccessSection />
        <HowWeBuildSection />
        <RoadmapSection />
        <FutureVisionSection />
        <FaqSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
