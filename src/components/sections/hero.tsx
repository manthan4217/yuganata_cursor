import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron/8 blur-[120px]"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-royal/10 blur-[100px]"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-emerald/8 blur-[80px]"
      />
    </div>
  )
}

function FloatingOrb({ delay, className }: { delay: number; className: string }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <HeroGrid />

      <div className="container-wide relative z-10 px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="default" className="mb-8 gap-1.5 px-4 py-1.5">
              <Sparkles className="h-3 w-3" />
              Engineering the Next Era of Intelligent Business
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl light:text-zinc-900"
          >
            Building the Operating Systems{" "}
            <span className="text-gradient-saffron">of Tomorrow</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl light:text-zinc-600"
          >
            We don't build software. We build intelligent Operating Systems that
            transform how industries operate — starting with hospitality, expanding
            to every sector that deserves better.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#products">
                Explore AthithyaOS
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#vision">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-20 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald" />
              <span>Enterprise SaaS</span>
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-saffron" />
              <span>AI-Powered</span>
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-royal" />
              <span>Industry OS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <FloatingOrb
        delay={0}
        className="absolute top-1/3 right-[10%] hidden h-3 w-3 rounded-full bg-saffron/40 lg:block"
      />
      <FloatingOrb
        delay={2}
        className="absolute bottom-1/3 left-[8%] hidden h-2 w-2 rounded-full bg-emerald/40 lg:block"
      />
    </section>
  )
}
