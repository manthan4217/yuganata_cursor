import { motion } from "framer-motion"
import { ArrowRight, MapPin, Briefcase } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote / India",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote / India",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    team: "Intelligence",
    location: "Remote / India",
    type: "Full-time",
  },
]

export function CareersSection() {
  return (
    <section id="careers" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="Careers"
          title="Build the future with us"
          description="We're looking for people who care about craft, think in systems, and want to transform how industries operate — not just ship another feature."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl space-y-4"
        >
          {openings.map((role) => (
            <motion.div
              key={role.title}
              variants={fadeInUp}
              className="glass group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-saffron/20 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-white light:text-zinc-900">
                  {role.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{role.team}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Briefcase className="h-3 w-3" />
                    {role.type}
                  </span>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="shrink-0" asChild>
                <a href="#contact">
                  Apply
                  <ArrowRight className="h-3 w-3" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 text-center text-sm text-muted light:text-zinc-600"
        >
          Don't see your role?{" "}
          <a href="#contact" className="text-saffron hover:underline">
            Reach out anyway
          </a>{" "}
          — we're always looking for exceptional people.
        </motion.p>
      </div>
    </section>
  )
}
