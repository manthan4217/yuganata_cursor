import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Monitor,
  Building2,
  Users,
  ShoppingCart,
  UtensilsCrossed,
  Hotel,
  HeartPulse,
  GraduationCap,
  Factory,
  Brain,
  Cloud,
  Code,
  Palette,
  Cog,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const services = [
  { icon: Globe, title: "Website Development", desc: "Stunning, fast, SEO-optimized websites" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform iOS & Android apps" },
  { icon: Monitor, title: "Desktop Software", desc: "Powerful native desktop applications" },
  { icon: Building2, title: "Enterprise ERP", desc: "End-to-end enterprise resource planning" },
  { icon: Users, title: "CRM Development", desc: "Intelligent customer relationship management" },
  { icon: ShoppingCart, title: "POS Software", desc: "Modern point-of-sale systems" },
  { icon: UtensilsCrossed, title: "Restaurant Software", desc: "Complete restaurant management" },
  { icon: Hotel, title: "Hotel Software", desc: "Property management systems" },
  { icon: HeartPulse, title: "Hospital ERP", desc: "Healthcare management platforms" },
  { icon: GraduationCap, title: "School ERP", desc: "Education management systems" },
  { icon: Factory, title: "Inventory Systems", desc: "Smart inventory tracking" },
  { icon: Brain, title: "AI Automation", desc: "Intelligent process automation" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
  { icon: Code, title: "API Development", desc: "Robust API design & integration" },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, user-centered design" },
  { icon: Cog, title: "Custom Software", desc: "Tailored solutions for unique needs" },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="What We Build"
          title="Comprehensive solutions for every business"
          description="From a landing page to complex enterprise AI systems — we have the engineering depth to build it all, alongside our own product line."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-saffron/20"
            >
              <service.icon className="mb-3 h-5 w-5 text-saffron transition-transform group-hover:scale-110" />
              <h3 className="font-display text-sm font-semibold text-white light:text-zinc-900">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted light:text-zinc-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
