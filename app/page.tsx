import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Schedule } from "@/components/schedule"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Schedule />
      <Pricing />
      <SiteFooter />
    </main>
  )
}
