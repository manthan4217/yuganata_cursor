import { motion } from "framer-motion"
import {
  Code2,
  Server,
  Database,
  Radio,
  Container,
  Cloud,
  Shield,
  GitBranch,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeInUp, staggerContainer } from "@/components/ui/section-header"

const stack = {
  frontend: {
    label: "Frontend",
    icon: Code2,
    color: "text-saffron",
    bg: "bg-saffron/10 ring-saffron/20",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  backend: {
    label: "Backend",
    icon: Server,
    color: "text-royal",
    bg: "bg-royal/10 ring-royal/20",
    items: ["Node.js", "Express.js", "PostgreSQL", "Socket.IO"],
  },
  cloud: {
    label: "Cloud & DevOps",
    icon: Cloud,
    color: "text-emerald",
    bg: "bg-emerald/10 ring-emerald/20",
    items: ["Docker", "Cloudflare", "AWS", "GitHub Actions"],
  },
}

const architecture = [
  { icon: Code2, label: "Client Layer", desc: "React + TypeScript" },
  { icon: Radio, label: "Real-Time", desc: "Socket.IO Events" },
  { icon: Server, label: "API Gateway", desc: "Express.js" },
  { icon: Database, label: "Data Layer", desc: "PostgreSQL" },
  { icon: Container, label: "Containers", desc: "Docker" },
  { icon: Shield, label: "Edge Security", desc: "Cloudflare" },
  { icon: Cloud, label: "Cloud Infra", desc: "AWS" },
  { icon: GitBranch, label: "CI/CD", desc: "GitHub Actions" },
]

export function TechnologySection() {
  return (
    <section id="technology" className="section-padding relative">
      <div className="container-wide">
        <SectionHeader
          badge="Technology"
          title="Built on a modern, battle-tested stack"
          description="Every layer is chosen for performance, reliability, and the ability to scale from a single restaurant to thousands of branches."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mb-16 grid gap-6 md:grid-cols-3"
        >
          {Object.values(stack).map((layer) => (
            <motion.div
              key={layer.label}
              variants={fadeInUp}
              className="glass rounded-2xl p-8"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${layer.bg}`}
              >
                <layer.icon className={`h-5 w-5 ${layer.color}`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white light:text-zinc-900">
                {layer.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted light:text-zinc-600"
                  >
                    <div className={`h-1.5 w-1.5 rounded-full ${layer.color.replace("text-", "bg-")}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h3 className="mb-8 text-center font-display text-xl font-semibold text-white light:text-zinc-900">
            System Architecture
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {architecture.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-xl border border-white/5 bg-void-elevated p-5 text-center transition-all hover:border-saffron/20 light:border-zinc-200 light:bg-white"
              >
                <node.icon className="mx-auto mb-3 h-5 w-5 text-muted transition-colors group-hover:text-saffron" />
                <p className="text-sm font-medium text-white light:text-zinc-900">
                  {node.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{node.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-px w-8 bg-saffron/30" />
              <span>End-to-end encrypted · Real-time sync · Auto-scaling</span>
              <div className="h-px w-8 bg-saffron/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
