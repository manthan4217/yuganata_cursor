import { motion } from "framer-motion"
import { Globe, Sparkles } from "lucide-react"
import { fadeInUp } from "@/components/ui/section-header"

export function FutureVisionSection() {
  return (
    <section id="future" className="section-padding relative">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass relative overflow-hidden rounded-3xl p-10 md:p-16"
        >
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-saffron/5 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-emerald/5 blur-[60px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 text-xs font-medium text-emerald">
              <Globe className="h-3 w-3" />
              Future Vision
            </div>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl light:text-zinc-900">
              One platform.{" "}
              <span className="text-gradient-saffron">Every industry.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted light:text-zinc-600">
              Yuganata isn't building a product line. We're building an ecosystem
              of intelligent Operating Systems — each designed for its industry,
              all connected through a shared intelligence layer that learns,
              adapts, and optimizes across the entire business landscape.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted light:text-zinc-600">
              The goal is simple: when a business owner wakes up, they shouldn't
              think about software. They should think about their business — and
              know that everything else is already handled.
            </p>

            <div className="mt-10 flex items-center justify-center gap-3 text-sm text-saffron-light">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">
                Building India's leading enterprise SaaS company — one era at a time.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
