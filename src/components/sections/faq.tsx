import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "What does Yuganata Technologies do?",
    a: "We build intelligent software products and custom enterprise solutions. Our flagship product is AthithyaOS — a hospitality Operating System. We also build ERPs, mobile apps, websites, and AI-powered systems for clients across industries.",
  },
  {
    q: "Is AthithyaOS only for large restaurant chains?",
    a: "No. AthithyaOS works for every scale — single cafés, cloud kitchens, and multi-branch chains. It's our first product, currently in Early Access.",
  },
  {
    q: "Can you build custom software for my business?",
    a: "Yes. Alongside our products, we offer custom software development — ERPs, CRMs, mobile apps, POS systems, and more. Reach out via our contact form or Early Access portal.",
  },
  {
    q: "How is AthithyaOS different from traditional POS?",
    a: "Traditional POS handles billing. AthithyaOS is a full Operating System — billing, kitchen, inventory, staff, analytics, and AI in one unified platform with no add-ons.",
  },
  {
    q: "What other products are coming?",
    a: "EduSmart OS (campus management) and RetailMax (omnichannel retail) are in development. Our long-term vision is industry Operating Systems for every sector.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Enterprise-grade encryption, AWS cloud infrastructure, and Cloudflare edge protection. Your data belongs to you — always.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="FAQ"
          title="Common questions"
          description="About Yuganata Technologies, our products, and how we work with businesses."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} variants={fadeInUp}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className={cn(
                  "glass w-full rounded-2xl px-6 py-5 text-left transition-all duration-300",
                  open === i && "border-saffron/20 glow-saffron"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-sm font-semibold text-white light:text-zinc-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted transition-transform duration-300",
                      open === i && "rotate-180 text-saffron"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pt-3 text-sm leading-relaxed text-muted light:text-zinc-600"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
