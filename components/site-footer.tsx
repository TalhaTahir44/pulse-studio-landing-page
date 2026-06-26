import { Activity, Camera, AtSign, Play, MessageCircle } from "lucide-react"

const socials = [
  { label: "Instagram", href: "#", Icon: Camera },
  { label: "X / Twitter", href: "#", Icon: AtSign },
  { label: "YouTube", href: "#", Icon: Play },
  { label: "TikTok", href: "#", Icon: MessageCircle },
]

const columns = [
  {
    title: "Studio",
    links: ["Our classes", "Coaches", "Memberships", "Gift cards"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQ", "Schedule a tour", "Terms", "Privacy"],
  },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="scroll-mt-16 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Activity className="size-6 text-primary" strokeWidth={2.5} aria-hidden="true" />
              <span className="font-heading text-xl font-bold uppercase tracking-tight">
                Pulse<span className="text-primary">Studio</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              123 Riverside Ave, City Center. Open daily 6am–9pm. Come find your
              pulse.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pulse Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for people who move.
          </p>
        </div>
      </div>
    </footer>
  )
}
