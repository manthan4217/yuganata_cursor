import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="Contact"
          title="Let's build the next era together"
          description="Whether you're a restaurant owner, an investor, or an engineer — we'd love to hear from you."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-4xl gap-8 md:grid-cols-5"
        >
          <motion.div variants={fadeInUp} className="space-y-6 md:col-span-2">
            <div className="glass rounded-2xl p-6">
              <Mail className="mb-3 h-5 w-5 text-saffron" />
              <h3 className="font-display text-sm font-semibold text-white light:text-zinc-900">
                Email
              </h3>
              <a
                href="mailto:hello@yuganata.com"
                className="mt-1 text-sm text-muted transition-colors hover:text-saffron light:text-zinc-600"
              >
                hello@yuganata.com
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <MapPin className="mb-3 h-5 w-5 text-saffron" />
              <h3 className="font-display text-sm font-semibold text-white light:text-zinc-900">
                Location
              </h3>
              <p className="mt-1 text-sm text-muted light:text-zinc-600">
                India
              </p>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            className="glass rounded-2xl p-8 md:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your business or inquiry..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-void-elevated px-4 py-3 text-sm text-white placeholder:text-muted-foreground transition-colors focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-white light:text-zinc-900"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
