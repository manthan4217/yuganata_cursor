import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutGrid,
  ShoppingCart,
  ChefHat,
  Receipt,
  Package,
  BookOpen,
  Truck,
  Users,
  Wallet,
  BarChart3,
  Brain,
  Building2,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { fadeInUp } from "@/components/ui/section-header"
import { DashboardMockup } from "@/components/mockups/dashboard-mockup"

const modules = [
  { icon: LayoutGrid, label: "Table Management" },
  { icon: ShoppingCart, label: "Order Management" },
  { icon: ChefHat, label: "Kitchen Display" },
  { icon: Receipt, label: "Billing & Payments" },
  { icon: Package, label: "Inventory" },
  { icon: BookOpen, label: "Recipe Management" },
  { icon: Truck, label: "Purchase & Suppliers" },
  { icon: Users, label: "Staff Attendance" },
  { icon: Wallet, label: "Payroll" },
  { icon: BarChart3, label: "Business Analytics" },
  { icon: Brain, label: "AI Insights" },
  { icon: Building2, label: "Multi-Branch" },
]

const views = [
  { id: "dashboard", label: "Owner Dashboard" },
  { id: "orders", label: "Orders" },
  { id: "kitchen", label: "Kitchen" },
  { id: "analytics", label: "Analytics" },
  { id: "inventory", label: "Inventory" },
  { id: "tables", label: "Table Layout" },
]

export function ProductsSection() {
  const [activeView, setActiveView] = useState("dashboard")

  return (
    <section id="products" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-saffron/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="First Product"
          title="AthithyaOS"
          description="Modern Hospitality, Rooted in Tradition. A next-generation Restaurant Operating System designed specifically for the Indian hospitality industry."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 flex flex-wrap justify-center gap-2"
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
          >
            <DashboardMockup view={activeView} />
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center text-muted light:text-zinc-600"
        >
          Unlike traditional POS software, AthithyaOS unifies restaurant operations
          into one intelligent ecosystem — from the first guest to the final
          report.
        </motion.p>
      </div>
    </section>
  )
}
