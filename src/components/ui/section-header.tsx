import { motion, type Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {badge && (
        <motion.span
          variants={fadeInUp}
          className="mb-4 inline-block rounded-full border border-saffron/20 bg-saffron/5 px-4 py-1.5 text-xs font-medium tracking-wide text-saffron-light uppercase"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl light:text-zinc-900"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg leading-relaxed text-muted light:text-zinc-600"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
