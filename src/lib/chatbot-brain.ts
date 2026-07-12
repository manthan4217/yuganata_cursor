export type ChatMessage = {
  id: string
  role: "user" | "bot"
  text: string
  links?: { label: string; href: string }[]
}

const DEFAULT_LINKS = [
  { label: "Our Products", href: "#products" },
  { label: "AthithyaOS", href: "#athithya" },
  { label: "Start a Project", href: "#early-access" },
  { label: "Contact Us", href: "#contact" },
]

type Rule = {
  keywords: string[]
  reply: string
  links?: { label: string; href: string }[]
}

const RULES: Rule[] = [
  {
    keywords: ["hello", "hi", "hey", "namaste", "start"],
    reply:
      "Hello! 👋 I'm Yuganata AI — your guide to our products, services, and Early Access program. What would you like to know?",
  },
  {
    keywords: ["athithya", "restaurant", "pos", "hospitality", "hotel", "cafe", "kitchen"],
    reply:
      "AthithyaOS is our flagship Hospitality Operating System — billing, kitchen display, inventory, staff, analytics & AI in one platform. Currently in Early Access for Indian restaurants.",
    links: [
      { label: "View AthithyaOS", href: "#athithya" },
      { label: "Get Early Access", href: "#early-access" },
    ],
  },
  {
    keywords: ["product", "edusmart", "retailmax", "retail", "edu", "school"],
    reply:
      "We build industry Operating Systems:\n\n• AthithyaOS — Hospitality (Early Access)\n• EduSmart OS — Campus management (In Development)\n• RetailMax — Omnichannel retail (In Development)",
    links: [{ label: "All Products", href: "#products" }],
  },
  {
    keywords: ["service", "custom", "build", "develop", "website", "app", "erp", "crm", "software"],
    reply:
      "Beyond our products, we build custom software — websites, mobile apps, ERPs, CRMs, POS systems, AI automation, and cloud solutions for any industry.",
    links: [
      { label: "Our Services", href: "#services" },
      { label: "Start a Project", href: "#early-access" },
    ],
  },
  {
    keywords: ["price", "pricing", "cost", "fee", "how much", "plan"],
    reply:
      "AthithyaOS Early Access includes founding member pricing — we'll share details on a call. Custom software is quoted based on scope. No hidden costs.",
    links: [{ label: "Request a Quote", href: "#early-access" }],
  },
  {
    keywords: ["founder", "manthan", "vignesh", "ceo", "cmo", "team", "who"],
    reply:
      "Yuganata was founded by Manthan Rajdev (Co-founder & CEO) and Vignesh Jare (Co-founder & CMO) — equal partners building intelligent software from India.",
    links: [{ label: "Meet the Founders", href: "#founders" }],
  },
  {
    keywords: ["india", "indian", "upi", "gst", "swiggy", "zomato"],
    reply:
      "We're built in India 🇮🇳 for India — UPI payments, GST-ready billing, thali pricing, and Swiggy/Zomato integration on our roadmap.",
    links: [{ label: "AthithyaOS Details", href: "#athithya" }],
  },
  {
    keywords: ["ai", "artificial", "intelligence", "forecast", "smart"],
    reply:
      "AI is woven into everything we build — demand forecasting, smart inventory alerts, menu intelligence, and staff optimization in AthithyaOS.",
    links: [{ label: "See AthithyaOS", href: "#athithya" }],
  },
  {
    keywords: ["contact", "email", "whatsapp", "call", "reach", "talk"],
    reply:
      "Reach us at hello@yuganata.com or fill the contact form. For AthithyaOS Early Access, use our project portal — we respond within 48 hours.",
    links: [
      { label: "Contact Form", href: "#contact" },
      { label: "Early Access", href: "#early-access" },
    ],
  },
  {
    keywords: ["demo", "trial", "early access", "join", "signup", "register"],
    reply:
      "Join our Early Access program! Limited founding spots for AthithyaOS restaurants, plus custom project inquiries for businesses.",
    links: [{ label: "Join Early Access", href: "#early-access" }],
  },
  {
    keywords: ["petpooja", "competitor", "different", "why", "better"],
    reply:
      "Unlike traditional POS with add-ons, we offer unified Operating Systems — one platform, modern UI, AI-native, built in 2026 not patched from 2011.",
    links: [{ label: "Why Yuganata", href: "#compare" }],
  },
  {
    keywords: ["career", "job", "hiring", "work", "join team"],
    reply:
      "We're always looking for exceptional engineers and designers. Check our open roles!",
    links: [{ label: "Careers", href: "#careers" }],
  },
]

export const QUICK_REPLIES = [
  "What is AthithyaOS?",
  "Your products",
  "Custom software",
  "Early Access",
  "Contact team",
]

export function getBotReply(input: string): Omit<ChatMessage, "id" | "role"> {
  const normalized = input.toLowerCase().trim()

  if (!normalized) {
    return {
      text: "Please type a message or pick a quick option below.",
    }
  }

  let bestRule: Rule | null = null
  let bestScore = 0

  for (const rule of RULES) {
    let score = 0
    for (const keyword of rule.keywords) {
      if (normalized.includes(keyword)) score += keyword.split(" ").length
    }
    if (score > bestScore) {
      bestScore = score
      bestRule = rule
    }
  }

  if (bestRule && bestScore > 0) {
    return { text: bestRule.reply, links: bestRule.links }
  }

  return {
    text: "Great question! I can help with our products, AthithyaOS, custom software, pricing, or connecting you with our team. Try one of the options below.",
    links: DEFAULT_LINKS,
  }
}

export const WELCOME_MESSAGE: Omit<ChatMessage, "id" | "role"> = {
  text: "Hi! I'm **Yuganata AI** — ask me about our products, AthithyaOS, custom software, or Early Access. How can I help?",
  links: QUICK_REPLIES.slice(0, 3).map((q) => ({
    label: q,
    href: `#chat:${q}`,
  })),
}
