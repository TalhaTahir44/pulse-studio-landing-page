import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "40+", label: "Classes / week" },
  { value: "12", label: "Expert coaches" },
  { value: "4.9", label: "Member rating" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/hero-studio.png"
        alt="Athlete training in the Pulse Studio gym under neon light"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          Now open in the city center
        </div>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Find your <span className="text-primary">pulse</span>. Feel the burn.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          A boutique fitness studio built for people who move with intention.
          High-energy spin, HIIT, strength and sculpt classes that push your
          limits and leave you electric.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 px-6 font-heading text-base uppercase tracking-wide [&_svg]:size-5"
            render={
              <a href="#pricing">
                Start training <ArrowRight />
              </a>
            }
          />
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 font-heading text-base uppercase tracking-wide"
            render={<a href="#schedule">View schedule</a>}
          />
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
