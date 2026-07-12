import { motion } from "framer-motion"
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand the Industry",
    description:
      "We embed ourselves in the workflows, pain points, and rhythms of each sector we serve.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design the Experience",
    description:
      "Every screen is crafted to feel like an intelligent assistant — not another dashboard.",
  },
  {
    icon: Code,
    step: "03",
    title: "Engineer with Precision",
    description:
      "Clean architecture, real-time systems, and AI woven into the core — not added on top.",
  },
  {
    icon: TestTube,
    step: "04",
    title: "Test in the Real World",
    description:
      "We ship to real businesses, gather feedback, and iterate until the software disappears.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Scale with Confidence",
    description:
      "From a single outlet to enterprise-wide deployment — built to grow without breaking.",
  },
]

export function HowWeBuildSection() {
  return (
    <section id="how-we-build" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="How We Build"
          title="From industry insight to intelligent Operating System"
          description="Our process isn't about shipping features faster. It's about understanding industries deeply enough to rebuild how they operate."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-linear-to-b from-saffron/30 via-royal/20 to-emerald/30 md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass inline-block rounded-2xl p-6 md:max-w-md">
                    <span className="text-xs font-medium tracking-widest text-saffron uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white light:text-zinc-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted light:text-zinc-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex shrink-0 justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-void-elevated ring-2 ring-saffron/20 glow-saffron light:bg-white light:ring-saffron/30">
                    <step.icon className="h-6 w-6 text-saffron" />
                  </div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
