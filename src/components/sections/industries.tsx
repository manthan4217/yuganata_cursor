import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const industries = [
  { emoji: "🍽️", label: "Restaurants" },
  { emoji: "🏨", label: "Hotels" },
  { emoji: "🛍️", label: "Retail" },
  { emoji: "🏥", label: "Healthcare" },
  { emoji: "🎓", label: "Education" },
  { emoji: "🏭", label: "Manufacturing" },
  { emoji: "🏗️", label: "Construction" },
  { emoji: "💰", label: "Finance" },
  { emoji: "🏢", label: "Corporate" },
  { emoji: "🚚", label: "Logistics" },
  { emoji: "📦", label: "Warehouse" },
  { emoji: "✈️", label: "Travel" },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-royal/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Industries"
          title="Software for every sector"
          description="We tailor our core technologies to meet the specific operational demands of diverse industries — through our products and custom solutions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={fadeInUp}
              className="glass group flex flex-col items-center rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-saffron/20"
            >
              <span className="text-2xl transition-transform group-hover:scale-110">
                {industry.emoji}
              </span>
              <span className="mt-2 text-xs font-medium text-muted light:text-zinc-600">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
