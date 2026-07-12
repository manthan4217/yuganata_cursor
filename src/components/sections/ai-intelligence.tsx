import { motion } from "framer-motion"
import { Brain, TrendingUp, Package, Users, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const capabilities = [
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Predict today's footfall and prep volume from your sales history — before the lunch rush hits.",
    metric: "↓ Food waste",
  },
  {
    icon: Package,
    title: "Smart Inventory Alerts",
    description: "Get warned before ingredients run out mid-service, not after a customer orders.",
    metric: "Zero stockouts",
  },
  {
    icon: UtensilsIcon,
    title: "Menu Intelligence",
    description: "See which dishes drive margin vs. popularity — and get suggestions to optimize your menu.",
    metric: "↑ Profit per plate",
  },
  {
    icon: Users,
    title: "Staff Optimization",
    description: "Align shift schedules with predicted demand so you're never overstaffed or understaffed.",
    metric: "↓ Labor cost",
  },
]

function UtensilsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}

export function AiIntelligenceSection() {
  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-saffron/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-royal/8 blur-[80px]" />
      </div>

      <div className="container-wide relative">
        <SectionHeader
          badge="AI at the Core"
          title="Intelligence that works while you serve guests"
          description="Not a chatbot bolted on. AI woven into every layer — forecasting, inventory, menu, and staff — so your restaurant runs smarter every single day."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={fadeInUp}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-saffron/20"
            >
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-saffron/5 blur-2xl transition-all group-hover:bg-saffron/10" />
              <div className="relative flex items-start justify-between gap-4">
                <cap.icon className="h-5 w-5 shrink-0 text-saffron" />
                <span className="rounded-full bg-emerald/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald ring-1 ring-emerald/20">
                  {cap.metric}
                </span>
              </div>
              <h3 className="relative mt-4 font-display text-base font-semibold text-white light:text-zinc-900">
                {cap.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted light:text-zinc-600">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-muted light:text-zinc-600"
        >
          <Brain className="h-4 w-4 text-saffron" />
          <span>Powered by real-time data across your entire operation</span>
          <Sparkles className="h-4 w-4 text-saffron" />
        </motion.div>
      </div>
    </section>
  )
}
