import { motion } from "framer-motion"

const items = [
  "Intelligent Products",
  "Enterprise Systems",
  "AI-Powered Platforms",
  "Custom Software",
  "Cloud-Native",
  "Made in India 🇮🇳",
  "Industry Operating Systems",
  "Mobile & Web Apps",
  "Multi-Industry",
  "Enterprise Grade",
]

export function StatsBar() {
  const doubled = [...items, ...items]

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-5 light:border-zinc-200">
      <div className="absolute inset-0 bg-linear-to-r from-void via-saffron/5 to-void light:from-zinc-50 light:via-saffron/5 light:to-zinc-50" />
      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center gap-8 px-4"
        >
          {doubled.map((item, i) => (
            <div key={`${item}-${i}`} className="flex shrink-0 items-center gap-8">
              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-muted light:text-zinc-600">
                {item}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
