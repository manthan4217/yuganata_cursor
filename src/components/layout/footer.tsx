import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/ui/logo"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const footerLinks = {
  Company: [
    { label: "Vision", href: "#vision" },
    { label: "Values", href: "#values" },
    { label: "Founders", href: "#founders" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  Products: [
    { label: "AthithyaOS", href: "#athithya" },
    { label: "EduSmart OS", href: "#products" },
    { label: "RetailMax", href: "#products" },
    { label: "Early Access", href: "#early-access" },
  ],
  Services: [
    { label: "What We Build", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Technology", href: "#technology" },
    { label: "Custom Software", href: "#early-access" },
  ],
  Resources: [
    { label: "Why Yuganata", href: "#compare" },
    { label: "FAQ", href: "#faq" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Careers", href: "#careers" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 light:border-zinc-200">
      <div className="container-wide px-6 py-16 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="block transition-opacity hover:opacity-90">
              <Logo size="lg" />
              <p className="mt-3 text-xs text-muted light:text-zinc-500">
                Engineering the Next Era of Intelligent Business.
              </p>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted light:text-zinc-600">
              Building intelligent Operating Systems for every industry —
              starting with hospitality, expanding to transform how businesses
              operate worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition-all hover:border-saffron/30 hover:text-saffron light:border-zinc-200"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition-all hover:border-saffron/30 hover:text-saffron light:border-zinc-200"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-white light:text-zinc-900">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-saffron light:text-zinc-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Yuganata Technologies. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
