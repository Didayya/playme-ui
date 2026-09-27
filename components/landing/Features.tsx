import { features } from "@/constants/landing";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-xs font-black tracking-[.2em] text-play-red">
          WHY PLAYME
        </span>
        <h2 className="mt-4 text-5xl font-black leading-[.9] tracking-tight md:text-7xl">
          Game night just{" "}
          <span className="text-play-cyan">got competitive.</span>
        </h2>
        <p className="mt-6 text-lg text-black/60">
          Everything you need to turn a simple quiz into an event everyone wants
          to win.
        </p>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map(([n, t, d], i) => (
          <article
            key={n}
            className={`group min-h-64 rounded-[1.7rem] border-2 border-black p-6 shadow-[5px_5px_0_#111] ${i === 0 ? "bg-play-green" : i === 1 ? "bg-play-cyan" : i === 2 ? "bg-play-red text-white" : "bg-white"}`}
          >
            <span className="text-xs font-black opacity-60">{n}</span>
            <h3 className="mt-16 text-2xl font-black">{t}</h3>
            <p className="mt-3 text-sm font-medium opacity-70">{d}</p>
            <div className="mt-5 font-black">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}
