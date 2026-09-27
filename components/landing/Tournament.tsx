import { steps } from "@/constants/landing";

export function Tournament() {
  return (
    <section
      id="tournaments"
      className="overflow-hidden bg-[#111] px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <span className="text-xs font-black tracking-[.2em] text-play-green">
              THE PLAYME EXPERIENCE
            </span>
            <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-tight md:text-7xl">
              Every question gets you closer to{" "}
              <span className="text-play-cyan">victory.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
              Join a tournament, answer the questions, watch your score rise,
              and fight your way to the top.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map(([n, t, d], i) => (
              <div
                key={n}
                className="rounded-3xl border border-white/15 bg-white/5 p-6"
              >
                <span
                  className={`text-sm font-black ${i % 2 ? "text-play-cyan" : "text-play-red"}`}
                >
                  {n}
                </span>
                <h3 className="mt-12 text-2xl font-black">{t}</h3>
                <p className="mt-2 text-sm text-white/55">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
