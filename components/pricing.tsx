import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Drop-In",
    price: "$22",
    period: "/ class",
    description: "Perfect for trying us out or staying flexible.",
    features: [
      "Single class credit",
      "Access to all class types",
      "Free towel & mat rental",
      "No commitment",
    ],
    cta: "Book a class",
    featured: false,
  },
  {
    name: "Unlimited",
    price: "$149",
    period: "/ month",
    description: "Best value for the dedicated mover.",
    features: [
      "Unlimited classes",
      "Priority bike & mat booking",
      "2 guest passes per month",
      "In-app progress tracking",
      "10% off all merch",
    ],
    cta: "Start unlimited",
    featured: false,
  },
  {
    name: "Studio Pro",
    price: "$229",
    period: "/ month",
    description: "Everything unlimited, plus personalized coaching.",
    features: [
      "Everything in Unlimited",
      "2 monthly 1:1 PT sessions",
      "Custom nutrition plan",
      "Recovery lounge access",
      "Unlimited guest passes",
    ],
    cta: "Go pro",
    featured: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Membership
          </p>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Pick your plan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            No contracts, no hidden fees. Cancel or switch plans anytime.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "group relative flex h-full flex-col rounded-2xl border bg-card transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg",
                tier.featured
                  ? "z-10 border-primary p-9 shadow-[0_0_40px_-12px_var(--color-primary)] hover:shadow-[0_12px_40px_-12px_var(--color-primary)] lg:-mt-3 lg:mb-3"
                  : "border-border p-8 hover:shadow-md",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <div
                className={cn(
                  "mt-6 rounded-xl border px-4 py-3 transition-all duration-300",
                  tier.featured
                    ? "border-primary/20 bg-primary/5 group-hover:border-primary/40 group-hover:bg-primary/10"
                    : "border-border/60 bg-muted/30 group-hover:border-primary/30 group-hover:bg-muted/50",
                )}
              >
                <div className="flex items-baseline gap-1">
                  <span className="origin-left font-heading text-5xl font-bold text-foreground transition-transform duration-300 group-hover:scale-105">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                        tier.featured
                          ? "bg-primary/20 text-primary group-hover:bg-primary/30"
                          : "bg-muted text-foreground group-hover:bg-primary/15 group-hover:text-primary",
                      )}
                    >
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={tier.featured ? "default" : "outline"}
                className="mt-8 h-11 w-full font-heading uppercase tracking-wide transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                render={<a href="#">{tier.cta}</a>}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
