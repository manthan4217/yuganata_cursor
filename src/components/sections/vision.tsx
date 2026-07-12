import { motion } from "framer-motion"
import { Layers, Zap, Brain, ArrowRightLeft } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const pillars = [
  {
    icon: Layers,
    title: "Unified Systems",
    description:
      "One intelligent ecosystem instead of ten disconnected tools fighting for your attention.",
  },
  {
    icon: Brain,
    title: "AI at the Core",
    description:
      "Intelligence woven into every workflow — not bolted on as an afterthought.",
  },
  {
    icon: Zap,
    title: "Real-Time Operations",
    description:
      "From kitchen to counter to corporate — every decision backed by live data.",
  },
  {
    icon: ArrowRightLeft,
    title: "Technology That Disappears",
    description:
      "Software should serve the business, not demand to be managed.",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="Our Vision"
          title="Industries deserve Operating Systems, not disconnected software"
          description="Businesses are forced to stitch together POS systems, inventory tools, payroll software, and spreadsheets — each with its own login, its own learning curve, its own failures. Yuganata exists to end that fragmentation."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              className="glass group rounded-2xl p-8 transition-all duration-300 hover:border-saffron/20 hover:glow-saffron"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/10 ring-1 ring-saffron/20 transition-all group-hover:bg-saffron/20">
                <pillar.icon className="h-5 w-5 text-saffron" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white light:text-zinc-900">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted light:text-zinc-600">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass mt-16 rounded-2xl p-8 md:p-12"
        >
          <blockquote className="text-center">
            <p className="font-display text-2xl leading-relaxed font-medium text-white md:text-3xl light:text-zinc-900">
              "We do not build software.{" "}
              <span className="text-gradient-saffron">
                We build complete Operating Systems.
              </span>
              "
            </p>
            <footer className="mt-6 text-sm text-muted light:text-zinc-500">
              — Yuganata Philosophy
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
