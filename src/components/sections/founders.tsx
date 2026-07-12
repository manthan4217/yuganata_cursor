import { motion } from "framer-motion"
import { Code2, TrendingUp } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const founders = [
  {
    name: "Manthan Rajdev",
    role: "Co-founder & Chief Executive Officer",
    domains: ["Product", "Engineering", "Strategy"],
    quote: "We're not building another POS. We're building the operating layer every industry is missing.",
    description:
      "Leads Yuganata's vision, product architecture, and engineering — turning ambitious ideas into systems that businesses actually run on.",
    initials: "MR",
    icon: Code2,
    accent: "saffron",
  },
  {
    name: "Vignesh Jare",
    role: "Co-founder & Chief Marketing Officer",
    domains: ["Brand", "Growth", "Partnerships"],
    quote: "Great technology means nothing if the right people never discover it. That's what we change.",
    description:
      "Leads brand strategy, market expansion, and strategic partnerships — bringing AthithyaOS to the restaurants ready to lead their market.",
    initials: "VJ",
    icon: TrendingUp,
    accent: "royal",
  },
]

const accentStyles = {
  saffron: {
    avatar: "bg-saffron/10 ring-saffron/25 text-saffron",
    icon: "text-saffron",
    hover: "hover:border-saffron/25",
    quote: "border-saffron/20 bg-saffron/5",
  },
  royal: {
    avatar: "bg-royal/10 ring-royal/25 text-blue-300",
    icon: "text-blue-300",
    hover: "hover:border-royal/25",
    quote: "border-royal/20 bg-royal/5",
  },
}

export function FoundersSection() {
  return (
    <section id="founders" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-saffron/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Leadership"
          title="Two founders. One mission."
          description="Equal partners building Yuganata from the ground up — one leading the product and technology, the other leading the brand and market."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2"
        >
          {founders.map((founder) => {
            const styles = accentStyles[founder.accent as keyof typeof accentStyles]

            return (
              <motion.div
                key={founder.name}
                variants={fadeInUp}
                className={`glass group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${styles.hover}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ring-1 ${styles.avatar}`}
                  >
                    <span className="font-display text-2xl font-bold">
                      {founder.initials}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-semibold text-white light:text-zinc-900">
                      {founder.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium leading-snug text-saffron-light">
                      {founder.role}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {founder.domains.map((domain) => (
                        <Badge key={domain} variant="secondary">
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <founder.icon className={`hidden h-5 w-5 shrink-0 sm:block ${styles.icon}`} />
                </div>

                <blockquote
                  className={`mt-6 rounded-xl border-l-2 px-4 py-3 text-sm italic leading-relaxed text-white/80 light:text-zinc-700 ${styles.quote}`}
                >
                  "{founder.quote}"
                </blockquote>

                <p className="mt-4 text-sm leading-relaxed text-muted light:text-zinc-600">
                  {founder.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
