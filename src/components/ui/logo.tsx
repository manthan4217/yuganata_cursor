import { cn } from "@/lib/utils"

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

interface LogoProps {
  className?: string
  imageClassName?: string
  showWordmark?: boolean
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: { box: "h-8 w-8", image: "h-7 w-7", title: "text-sm", subtitle: "text-[9px]" },
  md: { box: "h-9 w-9", image: "h-8 w-8", title: "text-sm", subtitle: "text-[10px]" },
  lg: { box: "h-11 w-11", image: "h-10 w-10", title: "text-base", subtitle: "text-[10px]" },
}

export function Logo({
  className,
  imageClassName,
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = sizeMap[size]

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-white/10",
          s.box
        )}
      >
        <img
          src={LOGO_SRC}
          alt="Yuganata Technologies"
          className={cn("object-contain p-0.5", s.image, imageClassName)}
        />
      </div>
      {showWordmark && (
        <div className="hidden sm:block">
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-white light:text-zinc-900",
              s.title
            )}
          >
            Yuganata
          </span>
          <span
            className={cn(
              "block tracking-widest text-muted uppercase light:text-zinc-500",
              s.subtitle
            )}
          >
            Technologies
          </span>
        </div>
      )}
    </div>
  )
}

export { LOGO_SRC }
