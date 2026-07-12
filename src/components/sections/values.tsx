import { motion } from "framer-motion"
import {
  Lightbulb,
  Gem,
  ShieldCheck,
  Gauge,
  TrendingUp,
  Lock,
  Heart,
  Telescope,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries — not for novelty, but to solve real problems better.",
  },
  {
    icon: Gem,
    title: "Craftsmanship",
    description: "Every pixel, every interaction, every line of code is intentional.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Businesses run on our systems. We earn that responsibility every day.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Speed isn't a feature. It's the foundation of great software.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Built for one branch today. Ready for a thousand tomorrow.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade protection woven into every layer of our stack.",
  },
  {
    icon: Heart,
    title: "Human-Centered Design",
    description: "Technology should adapt to people, not the other way around.",
  },
  {
    icon: Telescope,
    title: "Long-Term Thinking",
    description: "We build for decades, not quarterly releases.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="section-padding relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-royal/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Our Values"
          title="What guides every decision we make"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/20"
            >
              <value.icon className="mb-4 h-5 w-5 text-emerald transition-transform group-hover:scale-110" />
              <h3 className="font-display text-base font-semibold text-white light:text-zinc-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted light:text-zinc-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
