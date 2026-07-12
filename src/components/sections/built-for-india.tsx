import { motion } from "framer-motion"
import {
  IndianRupee,
  Receipt,
  UtensilsCrossed,
  Languages,
  Smartphone,
  Store,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const features = [
  {
    icon: IndianRupee,
    title: "UPI & Split Billing",
    description: "Native UPI payments, split bills, and mixed payment modes — built for how Indians actually pay.",
  },
  {
    icon: Receipt,
    title: "GST-Ready Invoicing",
    description: "Compliant billing, tax breakdowns, and export-ready reports from day one.",
  },
  {
    icon: UtensilsCrossed,
    title: "Indian Menu Logic",
    description: "Thali pricing, combo meals, table merging, and portion variants — not Western POS afterthoughts.",
  },
  {
    icon: Smartphone,
    title: "Aggregator Integration",
    description: "Swiggy & Zomato order sync on the roadmap — one kitchen, all channels.",
    badge: "Coming Soon",
  },
  {
    icon: Languages,
    title: "Regional Languages",
    description: "Staff interfaces in Hindi and regional languages so your team adopts it faster.",
    badge: "Coming Soon",
  },
  {
    icon: Store,
    title: "Single to Multi-Branch",
    description: "Start with one outlet. Scale to 100 without switching systems or losing data.",
  },
]

export function BuiltForIndiaSection() {
  return (
    <section id="india" className="section-padding relative">
      <div className="absolute inset-0 bg-linear-to-b from-emerald/3 via-transparent to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Built for India"
          title="Not imported software. Engineered for Indian hospitality."
          description="Every workflow — from UPI at the counter to GST at month-end — designed for how restaurants in India actually operate."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="glass group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/20"
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-royal/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-blue-300 uppercase ring-1 ring-royal/20">
                  {feature.badge}
                </span>
              )}
              <feature.icon className="mb-4 h-5 w-5 text-emerald transition-transform group-hover:scale-110" />
              <h3 className="font-display text-base font-semibold text-white light:text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted light:text-zinc-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
