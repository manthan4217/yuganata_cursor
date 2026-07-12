import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutGrid,
  ShoppingCart,
  ChefHat,
  Receipt,
  Package,
  Brain,
  Building2,
  IndianRupee,
  Receipt as ReceiptIcon,
  Smartphone,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fadeInUp } from "@/components/ui/section-header"
import { DashboardMockup } from "@/components/mockups/dashboard-mockup"

const modules = [
  { icon: LayoutGrid, label: "Table Management" },
  { icon: ShoppingCart, label: "Order Management" },
  { icon: ChefHat, label: "Kitchen Display" },
  { icon: Receipt, label: "Billing & Payments" },
  { icon: Package, label: "Inventory" },
  { icon: Brain, label: "AI Insights" },
  { icon: Building2, label: "Multi-Branch" },
]

const indiaFeatures = [
  { icon: IndianRupee, title: "UPI & Split Billing" },
  { icon: ReceiptIcon, title: "GST-Ready Invoicing" },
  { icon: Smartphone, title: "Aggregator Sync", badge: "Soon" },
]

const aiFeatures = [
  "Demand forecasting before the lunch rush",
  "Smart inventory alerts mid-service",
  "Menu intelligence — margin vs. popularity",
  "Staff scheduling based on predicted footfall",
]

const views = [
  { id: "dashboard", label: "Owner Dashboard" },
  { id: "orders", label: "Orders" },
  { id: "kitchen", label: "Kitchen" },
  { id: "analytics", label: "Analytics" },
]

export function AthithyaProductSection() {
  const [activeView, setActiveView] = useState("dashboard")

  return (
    <section id="athithya" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-saffron/5 via-transparent to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Flagship Product"
          title="AthithyaOS"
          description="Our first industry Operating System — replacing POS, kitchen display, inventory, payroll, and analytics with one intelligent platform built for Indian hospitality."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {modules.map((mod) => (
            <Badge key={mod.label} variant="outline" className="gap-1.5 py-1.5">
              <mod.icon className="h-3 w-3" />
              {mod.label}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              onClick={() => setActiveView(view.id)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeView === view.id
                  ? "bg-saffron text-white shadow-lg shadow-saffron/20"
                  : "glass text-muted hover:text-white light:hover:text-zinc-900"
              }`}
            >
              {view.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="gradient-border glow-saffron mx-auto max-w-5xl rounded-2xl p-1"
          >
            <div className="overflow-hidden rounded-[14px]">
              <DashboardMockup view={activeView} />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-base font-semibold text-white light:text-zinc-900">
              Built for Indian Restaurants
            </h3>
            <div className="mt-4 space-y-3">
              {indiaFeatures.map((f) => (
                <div key={f.title} className="flex items-center gap-3 text-sm text-muted light:text-zinc-600">
                  <f.icon className="h-4 w-4 shrink-0 text-emerald" />
                  {f.title}
                  {f.badge && (
                    <span className="rounded-full bg-royal/10 px-2 py-0.5 text-[10px] text-blue-300 ring-1 ring-royal/20">
                      {f.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-base font-semibold text-white light:text-zinc-900">
              AI That Works While You Serve
            </h3>
            <ul className="mt-4 space-y-3">
              {aiFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted light:text-zinc-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Button size="lg" asChild>
            <a href="#early-access">Get AthithyaOS Early Access</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
