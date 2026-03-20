import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-stone-50 dark:from-stone-900 dark:via-stone-950 dark:to-amber-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.08),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
            A Comprehensive Theological Exploration
          </h1>
          <p className="text-lg sm:text-xl text-amber-800/90 dark:text-amber-200/90 font-medium mb-2">
            Biblical Prophecies of Christ&apos;s Comings, the Dispensation of Grace, and the Blessed Hope of the Rapture
          </p>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mt-6">
            KJV Bible verses with Korean 흠정역 — no redundancy, no omissions. Navigate by section and theme to spread words of truth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/verses"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-500 transition-colors"
            >
              Browse all verses
            </Link>
            <Link
              href="/transcripts"
              className="inline-flex items-center justify-center rounded-lg border border-amber-600/50 dark:border-amber-500/40 px-5 py-2.5 text-sm font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
            >
              Transcript catalog (copy for Docs)
            </Link>
            <Link
              href="/beginning-faith"
              className="inline-flex items-center justify-center rounded-lg border border-amber-600/50 dark:border-amber-500/40 px-5 py-2.5 text-sm font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
            >
              Beginning Faith — Part A
            </Link>
            <Link
              href="#overview"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 dark:border-stone-600 px-5 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              Read overview
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-6">
          Overview: The Inerrant Prophetic Tapestry of Scripture
        </h2>
        <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-stone-600 dark:text-stone-400">
          <p>
            Our deep dive into the prophetic landscape of the King James Version (KJV) Bible, meticulously cross-referenced with its Korean 흠정역 translations, confirms the enduring faithfulness and sovereign intelligence of God. This comprehensive study has illuminated the breadth and precision of His prophetic plan, demonstrating His control over history through flawlessly fulfilled promises and His definitive roadmap for future events.
          </p>
          <p>
            Biblical prophecy serves a dual, vital function: it unequivocally foretells future events, but more fundamentally, it reveals the immutable will, glorious character, and ultimate purpose of God. Complementary to this, divine revelation unveils previously concealed truths, providing the necessary understanding and guidance for believers across all ages.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-stone-900 dark:text-white mt-12 mb-4">
          Summary of Core Prophetic and Doctrinal Themes
        </h3>
        <p className="text-stone-600 dark:text-stone-400 mb-8">
          This extensive analysis consolidates themes from approximately 1,792 unique verses, sketching the monumental scope of God&apos;s interaction with humanity, from the covenants of the past to the glories of the eternal state.
        </p>

        <ul className="space-y-8">
          <li className="rounded-xl border border-stone-200 dark:border-stone-700 p-6 bg-stone-50/50 dark:bg-stone-900/30">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-2">
              1. Jesus&apos; First Coming: Prophecy Fulfilled (Approx. 300 Verses)
            </h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              This foundational category anchors all Christian theology, detailing how the Messianic prophecies, spoken centuries in advance, were precisely and flawlessly realized in the first advent of Jesus Christ. Divine Birth and Origin, Anointed Ministry and Mission, Suffering and Resurrection, and Universal Salvation.
            </p>
          </li>
          <li className="rounded-xl border border-stone-200 dark:border-stone-700 p-6 bg-stone-50/50 dark:bg-stone-900/30">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-2">
              2. Jesus&apos; Second Coming: Glory, Judgment, and Eternal Kingdom (Approx. 1,475 Verses)
            </h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              The most extensive prophetic theme in all of Scripture. Nature and Timing of His Return, Preceding Signs and Divine Judgment, and the Establishment of His Eternal Kingdom—Millennial Reign, Restoration, and the Eternal State.
            </p>
          </li>
          <li className="rounded-xl border border-stone-200 dark:border-stone-700 p-6 bg-stone-50/50 dark:bg-stone-900/30">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-2">
              3. Gospel of Grace Revealed to Paul (Approx. 10 Verses)
            </h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              The &quot;gospel of the grace of God,&quot; a specific revelation entrusted uniquely to the Apostle Paul by the resurrected Christ. Salvation by grace through faith; the Mystery of the Church as one body in Christ.
            </p>
          </li>
          <li className="rounded-xl border border-stone-200 dark:border-stone-700 p-6 bg-stone-50/50 dark:bg-stone-900/30">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-2">
              4. The Rapture: Believers Caught Up (All 7 Relevant Verses)
            </h4>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              The &quot;Blessed Hope&quot;—a sudden, supernatural event preceding Christ&apos;s return. The gathering, the transformation, and the promise that believers will be with Him forever.
            </p>
          </li>
        </ul>

        <div className="mt-14 p-6 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
          <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
            Conclusion: Living in Light of Prophetic Certainty
          </h4>
          <p className="text-amber-800/90 dark:text-amber-200/90 text-sm leading-relaxed">
            The unified collection of KJV Bible verses, solidified by their 흠정역 Korean translations, offers an unshakeable perspective on God&apos;s prophetic timeline. From the flawless fulfillment of Jesus&apos; First Coming to the certain details of His future Second Coming, the Gospel of Grace, and the imminent hope of the Rapture—these truths call us to live in faith, vigilance, and readiness.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 dark:border-stone-800 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            Use the left navigation to jump to any section or theme and view every verse without redundancy or omission.
          </p>
          <Link
            href="/verses"
            className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-500 transition-colors"
          >
            Open verse index
          </Link>
        </div>
      </section>
    </div>
  );
}
