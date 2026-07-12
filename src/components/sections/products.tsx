import { motion } from "framer-motion"
import { ArrowRight, UtensilsCrossed, GraduationCap, Store } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const products = [
  {
    id: "athithya",
    icon: UtensilsCrossed,
    name: "AthithyaOS",
    tagline: "Modern Hospitality, Rooted in Tradition",
    description:
      "A complete Hospitality Operating System for restaurants, hotels, resorts, cafés, cloud kitchens, and multi-branch businesses.",
    features: ["Restaurant Mgmt", "Billing & POS", "Kitchen Display", "Inventory", "AI Analytics", "Multi-Branch"],
    status: "Early Access",
    statusVariant: "default" as const,
    accent: "saffron",
    href: "#athithya",
  },
  {
    id: "edusmart",
    icon: GraduationCap,
    name: "EduSmart OS",
    tagline: "Next-Gen Campus Management",
    description:
      "Unified platform connecting administrators, teachers, students, and parents — built for schools and institutions.",
    features: ["Student Portal", "Attendance", "Exams", "Fees", "Parent App", "Analytics"],
    status: "In Development",
    statusVariant: "secondary" as const,
    accent: "royal",
    href: "#products",
  },
  {
    id: "retailmax",
    icon: Store,
    name: "RetailMax",
    tagline: "Omnichannel Retail & POS",
    description:
      "Modern retail platform with inventory management, billing, and cross-channel sync for shops and chains.",
    features: ["POS Billing", "Inventory", "Barcode", "Multi-Store", "Reports", "Cloud Sync"],
    status: "In Development",
    statusVariant: "secondary" as const,
    accent: "emerald",
    href: "#products",
  },
]

const accentMap = {
  saffron: "hover:border-saffron/25 group-hover:text-saffron",
  royal: "hover:border-royal/25 group-hover:text-blue-300",
  emerald: "hover:border-emerald/25 group-hover:text-emerald",
}

export function ProductsSection() {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-saffron/3 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          badge="Our Products"
          title="Built for scale. Engineered for India."
          description="We build industry Operating Systems — not disconnected tools. AthithyaOS is live in Early Access. More products are on the way."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className={`glass group flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${accentMap[product.accent as keyof typeof accentMap]}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <product.icon className="h-6 w-6 text-saffron" />
                </div>
                <Badge variant={product.statusVariant}>{product.status}</Badge>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-white light:text-zinc-900">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-saffron-light">{product.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted light:text-zinc-600">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-muted light:bg-zinc-100 light:text-zinc-600"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {product.id === "athithya" && (
                <Button className="mt-6 w-full" asChild>
                  <a href={product.href}>
                    View AthithyaOS
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
