import { motion } from "framer-motion"
import { X, Check, Zap } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const rows = [
  { feature: "Speed", legacy: "Slow & bloated", yuganata: "Fast & optimized" },
  { feature: "Technology", legacy: "Legacy stack", yuganata: "Cutting-edge AI" },
  { feature: "Infrastructure", legacy: "On-premise / limited", yuganata: "Cloud-native & scalable" },
  { feature: "Support", legacy: "9–5 helpdesk", yuganata: "Direct founder access" },
  { feature: "Security", legacy: "Basic / vulnerable", yuganata: "Enterprise grade" },
  { feature: "Design", legacy: "Clunky & outdated", yuganata: "Modern & intuitive" },
  { feature: "Approach", legacy: "Disconnected tools", yuganata: "Unified Operating Systems" },
]

export function ComparisonSection() {
  return (
    <section id="compare" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/5 blur-[120px]" />
      </div>

      <div className="container-wide relative">
        <SectionHeader
          badge="Why Yuganata"
          title="The difference is clear"
          description="We don't compete on feature count. We compete on how software should work in 2026."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/5 light:border-zinc-200"
        >
          <div className="grid grid-cols-3 border-b border-white/5 bg-white/2 text-xs font-medium tracking-widest text-muted-foreground uppercase light:border-zinc-200 light:bg-zinc-50">
            <div className="p-4">Feature</div>
            <div className="border-x border-white/5 p-4 light:border-zinc-200">Traditional</div>
            <div className="p-4 text-saffron-light">Yuganata</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              variants={fadeInUp}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-white/5 light:border-zinc-200" : ""}`}
            >
              <div className="glass p-4 text-sm font-medium text-white light:text-zinc-900">
                {row.feature}
              </div>
              <div className="flex items-center gap-2 border-x border-white/5 p-4 text-sm text-muted light:border-zinc-200 light:text-zinc-600">
                <X className="h-3.5 w-3.5 shrink-0 text-red-400/60" />
                {row.legacy}
              </div>
              <div className="flex items-center gap-2 p-4 text-sm text-white/90 light:text-zinc-800">
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald" />
                {row.yuganata}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted light:text-zinc-600"
        >
          <Zap className="h-4 w-4 text-saffron" />
          Products + custom software — one engineering team
        </motion.div>
      </div>
    </section>
  )
}
