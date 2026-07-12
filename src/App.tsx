import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { VisionSection } from "@/components/sections/vision"
import { ProductsSection } from "@/components/sections/products"
import { WhySection } from "@/components/sections/why"
import { TechnologySection } from "@/components/sections/technology"
import { ValuesSection } from "@/components/sections/values"
import { FoundersSection } from "@/components/sections/founders"
import { HowWeBuildSection } from "@/components/sections/how-we-build"
import { RoadmapSection } from "@/components/sections/roadmap"
import { FutureVisionSection } from "@/components/sections/future-vision"
import { CareersSection } from "@/components/sections/careers"
import { ContactSection } from "@/components/sections/contact"

export default function App() {
  return (
    <div className="dark min-h-screen bg-void light:bg-zinc-50">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <ProductsSection />
        <WhySection />
        <TechnologySection />
        <ValuesSection />
        <FoundersSection />
        <HowWeBuildSection />
        <RoadmapSection />
        <FutureVisionSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
