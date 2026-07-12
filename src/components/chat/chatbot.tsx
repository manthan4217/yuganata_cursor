import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { LOGO_SRC } from "@/components/ui/logo"
import {
  getBotReply,
  QUICK_REPLIES,
  WELCOME_MESSAGE,
  type ChatMessage,
} from "@/lib/chatbot-brain"

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function formatText(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="font-semibold text-white light:text-zinc-900">{part}</strong> : part
      )}
      {i < text.split("\n").length - 1 && <br />}
    </span>
  ))
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "bot", ...WELCOME_MESSAGE },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
    })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing, scrollToBottom])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      const reply = getBotReply(trimmed)
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "bot", text: reply.text, links: reply.links },
      ])
      setTyping(false)
    }, 600 + Math.random() * 400)
  }, [])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-4 bottom-20 z-50 flex h-[min(520px,calc(100vh-6rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-void-elevated shadow-2xl shadow-black/50 light:border-zinc-200 light:bg-white"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-saffron/10 px-4 py-3 light:border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-saffron/30">
                  <img src={LOGO_SRC} alt="" className="h-7 w-7 object-contain p-0.5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white light:text-zinc-900">
                    Yuganata AI
                  </p>
                  <p className="flex items-center gap-1 text-[10px] text-emerald">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    Online · replies instantly
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-white light:hover:bg-zinc-100"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-saffron text-white"
                        : "glass text-muted light:text-zinc-700"
                    )}
                  >
                    {msg.role === "bot" ? formatText(msg.text) : msg.text}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.links.map((link) =>
                          link.href.startsWith("#chat:") ? (
                            <button
                              key={link.label}
                              type="button"
                              onClick={() => sendMessage(link.href.replace("#chat:", ""))}
                              className="rounded-lg bg-saffron/10 px-2.5 py-1 text-[11px] font-medium text-saffron-light ring-1 ring-saffron/20 transition-colors hover:bg-saffron/20"
                            >
                              {link.label}
                            </button>
                          ) : (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="rounded-lg bg-saffron/10 px-2.5 py-1 text-[11px] font-medium text-saffron-light ring-1 ring-saffron/20 transition-colors hover:bg-saffron/20"
                            >
                              {link.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="glass flex gap-1 rounded-2xl px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="h-2 w-2 rounded-full bg-saffron"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-3 light:border-zinc-200">
              <div className="mb-2 flex gap-1.5 overflow-x-auto pb-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted transition-colors hover:border-saffron/30 hover:text-saffron-light light:border-zinc-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage(input)
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about products, services..."
                  className="flex-1 rounded-xl border border-white/10 bg-void px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:border-saffron/30 focus:outline-none light:border-zinc-200 light:bg-zinc-50 light:text-zinc-900"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron text-white transition-colors hover:bg-saffron-light disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className={cn(
          "fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg transition-all",
          open
            ? "bg-void-elevated ring-1 ring-white/10 light:bg-zinc-800"
            : "bg-saffron shadow-saffron/30 hover:bg-saffron-light hover:shadow-saffron/40"
        )}
        aria-label={open ? "Close chat" : "Open chat assistant"}
      >
        {open ? (
          <X className="h-4 w-4" />
        ) : (
          <>
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Ask Yuganata AI</span>
            <Sparkles className="h-3 w-3 sm:ml-0" />
          </>
        )}
      </motion.button>
    </>
  )
}
