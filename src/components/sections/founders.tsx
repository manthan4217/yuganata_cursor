import { motion } from "framer-motion"
import { Code2, Megaphone } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const founders = [
  {
    name: "Manthan Rajdev",
    role: "Co-founder & CEO",
    focus: "CTO · Product & Engineering",
    description:
      "Leads Yuganata's product vision, system architecture, and engineering — building the operating layer industries have been missing.",
    initials: "MR",
    icon: Code2,
    accent: "saffron",
  },
  {
    name: "Vignesh Jare",
    role: "Co-founder",
    focus: "Sales & Marketing",
    description:
      "Drives market strategy, partnerships, and growth — connecting Yuganata with the businesses ready to transform how they operate.",
    initials: "VJ",
    icon: Megaphone,
    accent: "royal",
  },
]

const accentStyles = {
  saffron: {
    avatar: "bg-saffron/10 ring-saffron/25 text-saffron",
    icon: "text-saffron",
    hover: "hover:border-saffron/20",
  },
  royal: {
    avatar: "bg-royal/10 ring-royal/25 text-blue-300",
    icon: "text-blue-300",
    hover: "hover:border-royal/20",
  },
}

export function FoundersSection() {
  return (
    <section id="founders" className="section-padding relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-saffron/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="The Founders"
          title="Built by engineers who believe industries deserve better"
          description="Yuganata was started by two founders who saw businesses drowning in disconnected tools — and decided to build the unified operating systems they actually need."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        >
          {founders.map((founder) => {
            const styles = accentStyles[founder.accent as keyof typeof accentStyles]

            return (
              <motion.div
                key={founder.name}
                variants={fadeInUp}
                className={`glass group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${styles.hover}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ring-1 ${styles.avatar}`}
                  >
                    <span className="font-display text-xl font-bold">
                      {founder.initials}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-semibold text-white light:text-zinc-900">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-saffron-light">
                      {founder.role}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{founder.focus}</Badge>
                      <founder.icon className={`h-4 w-4 ${styles.icon}`} />
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted light:text-zinc-600">
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
