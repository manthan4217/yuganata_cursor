import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Layers, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"
import { DashboardMockup } from "@/components/mockups/dashboard-mockup"

const highlights = [
  { label: "AI Analytics", color: "bg-emerald" },
  { label: "Cloud Ready", color: "bg-saffron" },
  { label: "Enterprise Grade", color: "bg-royal" },
]

const productChips = [
  { name: "AthithyaOS", status: "Early Access", href: "#athithya" },
  { name: "EduSmart OS", status: "Soon", href: "#products" },
  { name: "RetailMax", status: "Soon", href: "#products" },
]

function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron/8 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-royal/10 blur-[100px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute bottom-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-emerald/8 blur-[80px]"
      />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-12">
      <HeroGrid />

      <div className="container-wide relative z-10 px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge variant="default" className="mb-6 gap-1.5 px-4 py-1.5">
                <Sparkles className="h-3 w-3" />
                Yuganata Technologies
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl light:text-zinc-900"
            >
              Building the{" "}
              <span className="text-gradient-saffron">Next Era</span> of
              Intelligent Business
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted light:text-zinc-600"
            >
              Intelligent products, enterprise systems, and AI-powered platforms —
              starting with AthithyaOS for hospitality, built to transform every
              industry.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
              {productChips.map((chip) => (
                <a
                  key={chip.name}
                  href={chip.href}
                  className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-saffron/30 hover:text-saffron-light light:text-zinc-600"
                >
                  {chip.name}
                  <span className="ml-1.5 text-[10px] text-muted-foreground">· {chip.status}</span>
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" asChild>
                <a href="#products">
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#athithya">
                  <Play className="h-4 w-4" />
                  See AthithyaOS
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hidden sm:inline-flex" asChild>
                <a href="#services">
                  <Layers className="h-4 w-4" />
                  Services
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${h.color}`} />
                  <span>{h.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="gradient-border glow-saffron rounded-2xl p-1">
              <div className="overflow-hidden rounded-[14px]">
                <DashboardMockup view="dashboard" />
              </div>
            </div>

            <div className="glass absolute -bottom-4 -left-4 rounded-xl px-4 py-3 shadow-xl sm:-left-6">
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Live Revenue
              </p>
              <p className="font-display text-lg font-semibold text-emerald">₹ 1,24,580</p>
            </div>

            <div className="glass absolute -top-3 -right-3 rounded-xl px-4 py-3 shadow-xl sm:-right-6">
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Orders Today
              </p>
              <p className="font-display text-lg font-semibold text-saffron-light">847</p>
            </div>

            <div className="glass absolute -right-2 bottom-1/4 hidden rounded-xl px-3 py-2 shadow-lg md:block">
              <p className="text-[10px] text-emerald">● All systems live</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
