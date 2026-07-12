import { motion } from "framer-motion"
import { UtensilsCrossed, ShoppingBag, HeartPulse, Factory, Truck, Brain } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"

const roadmap = [
  {
    icon: UtensilsCrossed,
    name: "AthithyaOS",
    status: "active",
    description: "Restaurant Operating System for Indian hospitality",
    year: "Today",
  },
  {
    icon: ShoppingBag,
    name: "RetailOS",
    status: "upcoming",
    description: "Unified retail operations for modern commerce",
    year: "2027",
  },
  {
    icon: HeartPulse,
    name: "HealthcareOS",
    status: "upcoming",
    description: "Intelligent systems for clinics and hospitals",
    year: "2028",
  },
  {
    icon: Factory,
    name: "ManufacturingOS",
    status: "upcoming",
    description: "End-to-end manufacturing intelligence",
    year: "2029",
  },
  {
    icon: Truck,
    name: "LogisticsOS",
    status: "upcoming",
    description: "Real-time supply chain orchestration",
    year: "2030",
  },
  {
    icon: Brain,
    name: "Industry Intelligence Platform",
    status: "vision",
    description: "Cross-industry AI that learns, predicts, and optimizes",
    year: "Future",
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Roadmap"
          title="One Operating System at a time"
          description="We start with hospitality. Then we transform every industry that deserves intelligent software."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="relative mx-auto max-w-2xl"
        >
          <div className="absolute top-0 bottom-0 left-6 w-px bg-linear-to-b from-saffron via-royal/40 to-emerald/30 md:left-1/2" />

          <div className="space-y-8">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.name}
                variants={fadeInUp}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`glass rounded-2xl p-6 transition-all duration-300 ${
                      item.status === "active"
                        ? "border-saffron/20 glow-saffron"
                        : "hover:border-white/10"
                    }`}
                  >
                    <div className={`mb-3 flex items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Badge
                        variant={
                          item.status === "active"
                            ? "default"
                            : item.status === "vision"
                              ? "emerald"
                              : "outline"
                        }
                      >
                        {item.year}
                      </Badge>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white light:text-zinc-900">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted light:text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-void-elevated ring-2 ring-white/10 light:bg-white light:ring-zinc-200">
                  <item.icon
                    className={`h-5 w-5 ${
                      item.status === "active" ? "text-saffron" : "text-muted"
                    }`}
                  />
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
