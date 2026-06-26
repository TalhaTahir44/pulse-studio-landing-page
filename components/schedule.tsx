import { Clock, Flame } from "lucide-react"

type ClassItem = {
  time: string
  name: string
  coach: string
  duration: string
  intensity: "Low" | "Mid" | "High"
}

const schedule: { day: string; classes: ClassItem[] }[] = [
  {
    day: "Monday",
    classes: [
      { time: "06:30", name: "Sunrise Spin", coach: "Maya R.", duration: "45 min", intensity: "High" },
      { time: "12:00", name: "Power HIIT", coach: "Deon K.", duration: "30 min", intensity: "High" },
      { time: "18:30", name: "Sculpt & Tone", coach: "Lina P.", duration: "50 min", intensity: "Mid" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "07:00", name: "Strength Lab", coach: "Theo M.", duration: "55 min", intensity: "High" },
      { time: "12:30", name: "Express Burn", coach: "Maya R.", duration: "25 min", intensity: "Mid" },
      { time: "19:00", name: "Flow & Recover", coach: "Sasha V.", duration: "60 min", intensity: "Low" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "06:30", name: "Beat Ride", coach: "Deon K.", duration: "45 min", intensity: "High" },
      { time: "17:30", name: "Core Crush", coach: "Lina P.", duration: "35 min", intensity: "Mid" },
      { time: "19:30", name: "Night Sculpt", coach: "Sasha V.", duration: "50 min", intensity: "Mid" },
    ],
  },
]

const intensityStyles: Record<ClassItem["intensity"], string> = {
  High: "bg-primary/15 text-primary border-primary/30",
  Mid: "bg-chart-2/15 text-chart-2 border-chart-2/30",
  Low: "bg-muted text-muted-foreground border-border",
}

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              This week
            </p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
              Class schedule
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A preview of our weekly line-up. Reserve your bike or mat in the app —
            spots fill fast.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {schedule.map((column) => (
            <div
              key={column.day}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                {column.day}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.classes.map((c) => (
                  <li
                    key={`${column.day}-${c.time}`}
                    className="group rounded-lg border border-border/60 bg-background/40 p-4 transition-colors hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {c.time}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide ${intensityStyles[c.intensity]}`}
                      >
                        <Flame className="size-3" aria-hidden="true" />
                        {c.intensity}
                      </span>
                    </div>
                    <p className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {c.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {c.coach} · {c.duration}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
