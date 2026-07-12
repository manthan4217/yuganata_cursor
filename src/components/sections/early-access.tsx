import { useState } from "react"
import { motion } from "framer-motion"
import { Rocket, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const perks = [
  "Direct access to the founding team",
  "Priority onboarding for AthithyaOS",
  "Custom software quotes within 48 hours",
  "Founding member pricing on products",
]

export function EarlyAccessSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="early-access" className="section-padding relative">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="gradient-border glow-saffron relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-saffron/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-royal/10 blur-[80px]" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                variants={fadeInUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron/20 bg-saffron/5 px-4 py-1.5 text-xs font-medium tracking-wide text-saffron-light uppercase"
              >
                <Rocket className="h-3 w-3" />
                Work With Yuganata
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl light:text-zinc-900"
              >
                Ready to build your{" "}
                <span className="text-gradient-saffron">next era</span>?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-muted light:text-zinc-600"
              >
                Whether you need AthithyaOS for your restaurant, custom ERP for
                your business, or a product built from scratch — we're ready.
              </motion.p>
              <motion.ul variants={fadeInUp} className="mt-6 space-y-3">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm text-white/80 light:text-zinc-700"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
                    {perk}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={fadeInUp}>
              {submitted ? (
                <div className="glass rounded-2xl p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white light:text-zinc-900">
                    We'll be in touch!
                  </h3>
                  <p className="mt-2 text-sm text-muted light:text-zinc-600">
                    Our team will reach out within 48 hours.
                  </p>
                </div>
              ) : (
                <form
                  className="glass space-y-4 rounded-2xl p-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div>
                    <label htmlFor="ea-name" className="mb-1.5 block text-xs font-medium text-muted">
                      Name / Business
                    </label>
                    <input
                      id="ea-name"
                      required
                      type="text"
                      placeholder="Your name or company"
                      className="w-full rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="ea-type" className="mb-1.5 block text-xs font-medium text-muted">
                      I'm interested in
                    </label>
                    <select
                      id="ea-type"
                      required
                      className="w-full rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="athithya">AthithyaOS — Restaurant OS</option>
                      <option value="custom">Custom Software / ERP</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="website">Website Development</option>
                      <option value="other">Other / Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ea-phone" className="mb-1.5 block text-xs font-medium text-muted">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="ea-phone"
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    No credit card. No commitment. Just a conversation.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
