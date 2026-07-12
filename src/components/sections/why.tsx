import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"
import { ArrowDown } from "lucide-react"

const traditional = [
  "Disconnected",
  "Manual",
  "Complex",
  "Slow",
  "Expensive",
]

const yuganata = [
  "Unified",
  "Real-Time",
  "AI Powered",
  "Beautiful",
  "Scalable",
]

export function WhySection() {
  return (
    <section id="why" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="Why Yuganata"
          title="The shift from software to Operating Systems"
          description="This isn't a feature comparison. It's a fundamental change in how businesses run."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto flex max-w-lg flex-col items-center gap-0"
        >
          <motion.div variants={fadeInUp} className="w-full text-center">
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Traditional Software
            </span>
          </motion.div>

          {traditional.map((item, i) => (
            <motion.div key={item} variants={fadeInUp} className="flex w-full flex-col items-center">
              <div className="glass w-full rounded-xl px-6 py-4 text-center">
                <span className="text-muted line-through decoration-red-500/40 light:text-zinc-500">
                  {item}
                </span>
              </div>
              {i < traditional.length - 1 && (
                <ArrowDown className="my-2 h-4 w-4 text-muted-foreground/40" />
              )}
            </motion.div>
          ))}

          <motion.div variants={fadeInUp} className="my-8 flex flex-col items-center">
            <div className="h-px w-32 bg-linear-to-r from-transparent via-saffron/50 to-transparent" />
            <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron/10 ring-2 ring-saffron/30 glow-saffron">
              <span className="font-display text-xl font-bold text-saffron">Y</span>
            </div>
            <span className="mt-3 font-display text-lg font-semibold text-white light:text-zinc-900">
              Yuganata
            </span>
            <div className="mt-2 h-px w-32 bg-linear-to-r from-transparent via-saffron/50 to-transparent" />
          </motion.div>

          {yuganata.map((item, i) => (
            <motion.div key={item} variants={fadeInUp} className="flex w-full flex-col items-center">
              <div className="glass w-full rounded-xl border-saffron/10 px-6 py-4 text-center transition-all hover:border-saffron/30 hover:glow-saffron">
                <span className="font-medium text-saffron-light">{item}</span>
              </div>
              {i < yuganata.length - 1 && (
                <ArrowDown className="my-2 h-4 w-4 text-saffron/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
