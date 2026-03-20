import Link from "next/link";

const themeCards = [
  {
    n: "1",
    title: "Jesus' First Coming: Prophecy Fulfilled",
    subtitle: "~300 verses",
    desc: "Messianic prophecies realized in Christ—birth, ministry, suffering, resurrection, and offer of salvation.",
    gradient: "from-rose-500/90 via-orange-500 to-amber-400",
    ring: "group-hover:ring-rose-400/50",
    darkGradient: "dark:from-rose-400 dark:via-orange-400 dark:to-amber-300",
  },
  {
    n: "2",
    title: "Second Coming: Glory, Judgment & Kingdom",
    subtitle: "~1,475 verses",
    desc: "The breadth of Scripture on His return—signs, judgment, millennial reign, restoration, and eternity.",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    ring: "group-hover:ring-violet-400/50",
    darkGradient: "dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400",
  },
  {
    n: "3",
    title: "Gospel of Grace (Paul)",
    subtitle: "~10 verses",
    desc: "The revelation of grace through faith; the mystery of the Church as one body in Christ.",
    gradient: "from-sky-500 via-cyan-500 to-teal-400",
    ring: "group-hover:ring-cyan-400/50",
    darkGradient: "dark:from-sky-400 dark:via-cyan-400 dark:to-teal-300",
  },
  {
    n: "4",
    title: "The Rapture: Blessed Hope",
    subtitle: "7 verses",
    desc: "Caught up to meet the Lord—the gathering, transformation, and comfort of the believer.",
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    ring: "group-hover:ring-emerald-400/50",
    darkGradient: "dark:from-emerald-400 dark:via-green-400 dark:to-lime-300",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-stone-200/80 dark:border-stone-800/80">
        {/* Mesh + orbs */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80 dark:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.stone.50)_0%,theme(colors.amber.50)_32%,theme(colors.rose.50)_58%,theme(colors.violet.50)_100%)] dark:bg-[linear-gradient(145deg,theme(colors.stone.950)_0%,theme(colors.amber.950/40)_35%,theme(colors.violet.950/50)_70%,theme(colors.stone.950)_100%)]" />
          <div className="absolute -left-20 top-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-amber-400/70 via-orange-400/50 to-rose-400/60 blur-3xl motion-safe:animate-float-slow motion-reduce:animate-none dark:from-amber-500/30 dark:via-orange-500/25 dark:to-rose-500/30" />
          <div className="absolute -right-24 top-32 h-[380px] w-[380px] rounded-full bg-gradient-to-bl from-violet-500/55 via-fuchsia-400/45 to-cyan-400/40 blur-3xl motion-safe:animate-float-delayed motion-reduce:animate-none dark:from-violet-500/35 dark:via-fuchsia-500/25 dark:to-cyan-500/20" />
          <div className="absolute bottom-0 left-1/3 h-[280px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-t from-amber-300/50 to-transparent blur-2xl dark:from-amber-600/20 dark:to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C8B7A' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-14 sm:pt-20 sm:pb-28">
          <div className="motion-safe:animate-fade-up motion-reduce:opacity-100 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900/90 shadow-sm backdrop-blur-md dark:border-amber-400/20 dark:bg-stone-900/60 dark:text-amber-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_theme(colors.emerald.400)] motion-safe:animate-pulse" />
              KJV · 흠정역
            </span>
            <span className="inline-flex rounded-full border border-stone-200/80 bg-white/60 px-3 py-1 text-xs font-medium text-stone-600 backdrop-blur-md dark:border-stone-600/60 dark:bg-stone-900/50 dark:text-stone-300">
              ~1,792 unique verses indexed
            </span>
          </div>

          <h1 className="motion-safe:animate-fade-up-delay-1 mt-8 max-w-4xl font-bold tracking-tight text-stone-900 dark:text-white">
            <span className="block text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              A Comprehensive{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 bg-clip-text text-transparent dark:from-amber-300 dark:via-orange-300 dark:to-rose-400">
                  Theological
                </span>
                <span className="absolute -inset-1 -z-0 rounded-lg bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-rose-500/20 blur-lg dark:from-amber-500/10 dark:via-orange-500/10 dark:to-rose-500/10" />
              </span>{" "}
              Exploration
            </span>
          </h1>

          <p className="motion-safe:animate-fade-up-delay-2 mt-6 max-w-2xl text-lg font-medium leading-relaxed text-stone-700 dark:text-stone-200 sm:text-xl">
            Biblical prophecies of Christ&apos;s comings, the dispensation of grace, and the blessed hope
            of the Rapture—organized so you can study without redundancy or omission.
          </p>
          <p className="motion-safe:animate-fade-up-delay-2 text-stone-600 dark:text-stone-400 mt-4 max-w-2xl text-base leading-relaxed">
            Browse by section and theme, copy transcript-style documents, and open the Beginning Faith Q&amp;A
            series—all in one place.
          </p>

          <div className="motion-safe:animate-fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/verses"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 ring-1 ring-white/20 transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.98] dark:shadow-orange-900/40 dark:ring-white/10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />
              <span className="relative">Browse all verses</span>
              <span className="relative ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/transcripts"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-violet-300/80 bg-white/80 px-6 py-3.5 text-sm font-semibold text-violet-900 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-white hover:shadow-md active:translate-y-0 dark:border-violet-500/40 dark:bg-violet-950/40 dark:text-violet-100 dark:hover:border-violet-400/60 dark:hover:bg-violet-900/50"
            >
              Transcript catalog (Docs)
            </Link>
            <Link
              href="/beginning-faith"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-50/90 to-sky-50/90 px-6 py-3.5 text-sm font-semibold text-cyan-950 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-md active:translate-y-0 dark:from-cyan-950/50 dark:to-sky-950/50 dark:border-cyan-400/35 dark:text-cyan-100 dark:hover:border-cyan-300/50"
            >
              Beginning Faith A–D
            </Link>
            <Link
              href="#overview"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold text-stone-600 underline-offset-4 transition hover:text-stone-900 hover:underline dark:text-stone-400 dark:hover:text-white"
            >
              Read overview ↓
            </Link>
          </div>

          {/* Feature strip */}
          <div className="motion-safe:animate-fade-up-delay-3 mt-14 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Structured index", hint: "Category × theme" },
              { label: "292 summaries", hint: "One-click for Google Docs" },
              { label: "Q&A A–D", hint: "Beginning Faith series" },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-stone-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-md transition duration-300 hover:border-amber-300/60 hover:shadow-md dark:border-stone-700/80 dark:bg-stone-900/50 dark:hover:border-amber-500/30"
              >
                <p className="font-semibold text-stone-900 dark:text-white">{item.label}</p>
                <p className="mt-1 text-sm text-stone-600 transition group-hover:text-amber-700 dark:text-stone-400 dark:group-hover:text-amber-300/90">
                  {item.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        id="overview"
        className="relative mx-auto max-w-5xl scroll-mt-8 px-6 py-16 sm:py-24"
      >
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Overview
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            The Inerrant Prophetic Tapestry of Scripture
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-stone-600 dark:text-stone-400 sm:mx-0">
            King James text with Korean 흠정역—a careful map of God&apos;s prophetic plan from fulfilled
            promises to the return of Christ and the hope of the Church.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200/90 bg-white/80 p-8 shadow-lg shadow-stone-200/50 backdrop-blur-sm dark:border-stone-700/80 dark:bg-stone-900/60 dark:shadow-none">
            <div className="prose prose-stone max-w-none dark:prose-invert prose-p:text-stone-600 dark:prose-p:text-stone-400">
              <p>
                This study highlights the breadth and precision of God&apos;s prophetic word—His control
                through fulfilled promise and His roadmap for what is yet ahead.
              </p>
              <p>
                Prophecy foretells events, but more deeply it reveals God&apos;s will, character, and
                purpose; revelation opens what we need for faith and obedience in every age.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8 text-white shadow-xl shadow-purple-500/25 ring-1 ring-white/10">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Scale of this collection
            </p>
            <p className="mt-3 text-2xl font-bold leading-snug">
              Themes drawn from approximately{" "}
              <span className="text-amber-200 drop-shadow-sm">1,792</span> unique verses
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              From ancient covenants to the eternal state—organized for teaching, memorization, and
              defense of the faith.
            </p>
          </div>
        </div>

        <h3 className="mt-16 text-xl font-bold text-stone-900 dark:text-white sm:text-2xl">
          Core prophetic &amp; doctrinal themes
        </h3>
        <p className="mt-2 max-w-3xl text-stone-600 dark:text-stone-400">
          Hover a card to see it lift—each track uses a distinct color lane so the layout stays vivid
          and scannable.
        </p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {themeCards.map((card) => (
            <li key={card.n}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border border-stone-200/90 bg-white/90 p-6 shadow-inner shadow-stone-100/50 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stone-700/80 dark:bg-stone-900/70 dark:shadow-none ${card.ring} hover:ring-2`}
              >
                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${card.gradient} ${card.darkGradient} opacity-90`}
                  aria-hidden
                />
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-lg font-bold text-white shadow-md ${card.darkGradient}`}
                  >
                    {card.n}
                  </span>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white">
                      {card.title}{" "}
                      <span className="block text-sm font-normal text-stone-500 dark:text-stone-400">
                        {card.subtitle}
                      </span>
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50/80 to-rose-50 p-px dark:border-amber-500/30 dark:from-amber-950/80 dark:via-orange-950/50 dark:to-rose-950/60">
          <div className="rounded-[1.35rem] bg-white/90 p-8 dark:bg-stone-950/80">
            <h4 className="font-bold text-lg text-amber-950 dark:text-amber-100">
              Conclusion: Living in light of prophetic certainty
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-amber-900/85 dark:text-amber-200/90">
              From the flawless accomplishment of Christ&apos;s first coming to the sure details of His
              return, the gospel of grace, and the imminent hope of the Rapture—these truths invite
              faith, vigilance, and readiness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-stone-200 dark:border-stone-800">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 opacity-95 dark:opacity-90" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay motion-safe:animate-shine motion-reduce:animate-none"
          style={{
            background:
              "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.05) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-lg font-semibold text-white drop-shadow-sm">
            Jump in from the sidebar—every section and theme opens without gaps in the verse list.
          </p>
          <p className="mt-2 text-sm text-white/85">
            Or start with the full verse index for the fastest path to the text.
          </p>
          <Link
            href="/verses"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-violet-700 shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-100 dark:bg-stone-100 dark:text-violet-800"
          >
            Open verse index
          </Link>
        </div>
      </section>
    </div>
  );
}
