import Image from "next/image";

/* ─── Colour tokens ─────────────────────────────────────────── */
const GOLD = "#c9a96e";
const CREAM = "#fdf8f3";
const WARM = "#f5ede0";
const DARK = "#2c2c2c";
const MUTED = "#7a6a5a";

/* ─── Types ─────────────────────────────────────────────────── */
interface SchoolPhoto {
  src: string;
  year: string;
  grade: string;
  caption: string;
  rotate: string;
}
interface GalleryItem {
  src: string;
  caption: string;
  subCaption: string;
  rotate: string;
}
interface Fact {
  emoji: string;
  title: string;
  body: string;
}
interface Milestone {
  year: string;
  text: string;
}

/* ─── Data ───────────────────────────────────────────────────── */
const schoolPhotos: SchoolPhoto[] = [
  {
    src: "/photos/first-grade.jpg",
    year: "2005",
    grade: "1st Grade",
    caption:
      "Eyes open. Hair braided. Ready to absolutely dominate first grade. The butterfly shirt alone deserves an award.",
    rotate: "-2deg",
  },
  {
    src: "/photos/second-grade.jpg",
    year: "2006",
    grade: "2nd Grade",
    caption:
      'The photographer said "smile!" Georgia said "I\'m thinking." Eyes: closed. Smile: flawless. Portrait: purchased by Dad anyway.',
    rotate: "1.5deg",
  },
  {
    src: "/photos/eighth-grade.jpg",
    year: "2012",
    grade: "8th Grade",
    caption:
      "Braces acquired. Attitude plentiful. She was 13 and already operating on a different level than the rest of us.",
    rotate: "-1deg",
  },
];

const galleryItems: GalleryItem[] = [
  {
    src: "/photos/dog-beach.jpg",
    caption: "Best Friends Forever",
    subCaption:
      "The dog got more hugs than any human that day. This has not changed in 20 years.",
    rotate: "-2deg",
  },
  {
    src: "/photos/angels-baseball.jpg",
    caption: "Angels Stadium, Spring Training",
    subCaption:
      "Dad insisted on matching Angels shirts. Georgia was gracious about it. She had no choice.",
    rotate: "1deg",
  },
  {
    src: "/photos/georgia-williams-sweatshirt.jpg",
    caption: '"GEORGIA" + "WILLIAMS"',
    subCaption:
      "Dad planned this before she was born. She had no input on the name. She turned out perfect anyway.",
    rotate: "-1.5deg",
  },
  {
    src: "/photos/swim-team.jpg",
    caption: "Swim Team, 2013",
    subCaption:
      "She was genuinely fast in the pool. Getting up for 5am practice was a work in progress.",
    rotate: "2deg",
  },
  {
    src: "/photos/halloween-topgun.jpg",
    caption: "Halloween 2013",
    subCaption:
      "While her friends chose cute bunny costumes, Georgia chose Top Gun fighter pilot. This tells you everything.",
    rotate: "-1deg",
  },
  {
    src: "/photos/surf-city.jpg",
    caption: "Surf City USA, 2021",
    subCaption:
      "Dad requested another selfie. Georgia pretended not to love it. She keeps showing up — that's love.",
    rotate: "1.5deg",
  },
  {
    src: "/photos/christmas-santa.jpg",
    caption: "Christmas 2023",
    subCaption:
      "Santa showed up to the family Christmas. We have some questions about his identity.",
    rotate: "-2deg",
  },
  {
    src: "/photos/chef-event.jpg",
    caption: "ACF Culinary Competition, 2025",
    subCaption:
      "She once demanded Dad make her grilled cheese at 10pm. Now she's the trained chef. We're still waiting for the apology dinner.",
    rotate: "1deg",
  },
  {
    src: "/photos/family-2025.jpg",
    caption: "Summer 2025",
    subCaption:
      "Still putting up with the family. Still looks better than everyone else in the photo.",
    rotate: "-1.5deg",
  },
  {
    src: "/photos/georgia-dog-2026.jpg",
    caption: "Priorities, 2026",
    subCaption:
      "Georgia sharing a Kirkland dog bed with the family Rottweiler. No notes. This is correct behavior.",
    rotate: "2deg",
  },
  {
    src: "/photos/upside-down.jpg",
    caption: "Dad & Georgia, 2025",
    subCaption:
      "One of them held the phone correctly. We'll let you figure out which one.",
    rotate: "-1deg",
  },
  {
    src: "/photos/friends-group.jpg",
    caption: "Grandma & the Girls",
    subCaption: "She surrounds herself with good people. Always has.",
    rotate: "1.5deg",
  },
];

const funFacts: Fact[] = [
  {
    emoji: "📅",
    title: "She Was Born in 1999",
    body: "Which means she grew up with dial-up internet, Tamagotchis, and the very real fear that Y2K was going to end civilization. She survived all three.",
  },
  {
    emoji: "🐕",
    title: "Dogs > People (Allegedly)",
    body: "At any given family gathering, Georgia can be found on the floor with the dog before she's said hello to the humans. The dog has never complained about this arrangement.",
  },
  {
    emoji: "🍳",
    title: "Professional Chef-in-Training",
    body: "After years of requesting elaborate meals from Dad at unreasonable hours, Georgia enrolled in culinary school and is now actually better at cooking than everyone who ever fed her. Humbling.",
  },
  {
    emoji: "🏊",
    title: "Former Competitive Swimmer",
    body: "She was genuinely fast and genuinely committed — right up until 5am practice conflicted with being a teenager. A relatable arc.",
  },
  {
    emoji: "✈️",
    title: "Fashion-Forward Since Birth",
    body: "The girl who wore a Top Gun flight suit to Halloween while her friends wore bunny ears has always had her own sense of style. Zero apologies.",
  },
  {
    emoji: "📸",
    title: "The Legendary Blink",
    body: "In 2006, Georgia blinked during picture day and still produced what is arguably the most iconic school photo in Williams family history. It has been framed. Twice.",
  },
];

const milestones: Milestone[] = [
  {
    year: "1999",
    text: "Georgia Williams enters the world. Everyone's sleep schedule was immediately affected.",
  },
  {
    year: "2005",
    text: "First grade. Eyes open. Hair braided. Already the best-dressed kid in class.",
  },
  {
    year: "2006",
    text: "Blinks during school portrait day. Dad frames it anyway. Twice.",
  },
  {
    year: "~2008",
    text: "Declares a Rottweiler her best friend at dog beach. The feeling is mutual.",
  },
  {
    year: "2012",
    text: "Joins the swim team. Sets records. Also acquires braces.",
  },
  {
    year: "2013",
    text: "Halloween: chooses Top Gun over bunny ears. Legend status confirmed.",
  },
  {
    year: "2017+",
    text: "High school years. Dad takes every selfie opportunity possible.",
  },
  {
    year: "2021",
    text: "Surf City USA selfie. Georgia is gracious about it.",
  },
  {
    year: "2023",
    text: "Culinary school — turning a lifetime of demanding good food into actually making it.",
  },
  {
    year: "2025",
    text: "ACF culinary competition. Chef whites. Dad is insufferably proud.",
  },
  {
    year: "2026",
    text: "27 years old. Still the best thing that ever happened to this family.",
  },
];

/* ─── Page Component ─────────────────────────────────────────── */
export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-lato, Lato, Arial, sans-serif)" }}>
      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50 shadow-lg"
        style={{ backgroundColor: DARK }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="text-xl tracking-wide font-bold"
            style={{
              color: GOLD,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Georgia Williams
          </span>
          <div className="hidden sm:flex gap-6 text-xs font-light tracking-widest uppercase text-gray-300">
            {["Story", "School Days", "Gallery", "Fun Facts"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${DARK} 0%, #3d2b1a 50%, #1a1008 100%)`,
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
          {/* Polaroid photo */}
          <div className="flex-shrink-0">
            <div
              style={{
                transform: "rotate(-2deg)",
                backgroundColor: "white",
                padding: "12px 12px 48px 12px",
                boxShadow: "4px 8px 32px rgba(0,0,0,0.4)",
                maxWidth: 300,
              }}
            >
              <Image
                src="/photos/georgia-hero.jpg"
                alt="Georgia Williams"
                width={280}
                height={350}
                className="w-full object-cover block"
                priority
              />
              <p
                className="text-center mt-3 italic text-sm"
                style={{
                  color: "#666",
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                }}
              >
                Georgia, present day
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: GOLD }}
            >
              Est. January 1999 · Southern California
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              style={{
                color: "white",
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              Georgia
              <br />
              <span style={{ color: GOLD }}>Williams</span>
            </h1>
            <p
              className="text-lg md:text-xl font-light max-w-lg leading-relaxed mb-8"
              style={{ color: "#d4c4b0" }}
            >
              Daughter. Chef-in-training. Dog whisperer. Professional eye-closer
              in school photos. The best thing to come out of January 1999 —
              and yes, that includes the iMac G3.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                "27 Years Young",
                "California Girl",
                "Future Head Chef",
                "Dog Mom",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-wider uppercase px-4 py-2 rounded-full border font-semibold"
                  style={{ borderColor: GOLD, color: GOLD }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase text-gray-400">
            Scroll
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{
              background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="py-24 px-6" style={{ backgroundColor: WARM }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: GOLD }}
          >
            The Origin Story
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{
              color: DARK,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            About Georgia
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-3 mb-4 rounded"
            style={{ background: `linear-gradient(90deg, ${GOLD}, #e8d5a3)` }}
          />
          <p className="text-sm italic mb-12" style={{ color: MUTED }}>
            (Written with love and only mild exaggeration by Dad)
          </p>

          <div
            className="rounded-2xl p-8 md:p-12 text-left shadow-md"
            style={{ backgroundColor: "white" }}
          >
            <div
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: DARK }}
            >
              <p>
                <strong>Georgia Williams</strong> arrived in January 1999,
                immediately disrupting everyone&apos;s sleep schedule and
                showing zero remorse for it. From day one she had opinions —
                strong ones — and a smile that got her out of most of the
                trouble those opinions caused.
              </p>
              <p>
                She grew up in Southern California, which means she considers
                65°F &ldquo;freezing,&rdquo; has a deeply personal relationship
                with the beach, and genuinely believes avocado belongs on
                everything. She is correct about the avocado.
              </p>
              <p>
                In her youth, Georgia was a competitive swimmer, a Halloween
                costume innovator (Top Gun flight suit: iconic), and the kind of
                kid who adopted every dog she ever met — starting with a
                Rottweiler she attempted to sit on at the beach. The dog seemed
                fine with it.
              </p>
              <p>
                Today, Georgia is pursuing her passion for food as a culinary
                student and aspiring chef. She has cooked things that would make
                Gordon Ramsay weep — in the good way. Her father, who once made
                her grilled cheese at 11pm on demand, takes full credit for
                inspiring her culinary career. Georgia disputes this.
              </p>
              <p>
                She is funny, fiercely loyal, embarrassingly talented, and the
                kind of person who makes every room warmer just by walking into
                it. She&apos;d probably roll her eyes at that last sentence,
                which is exactly what makes it true.
              </p>
              <p
                className="text-right text-xl italic pt-4"
                style={{
                  color: GOLD,
                  borderTop: `1px solid #e8d5a3`,
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                }}
              >
                — Her Very Proud Dad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHOOL DAYS ── */}
      <section
        id="school-days"
        className="py-24 px-6"
        style={{
          background: `linear-gradient(180deg, ${CREAM} 0%, ${WARM} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: GOLD }}
            >
              Exhibit A through C
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                color: DARK,
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              The School Portrait Hall of Fame
            </h2>
            <div
              className="w-16 h-1 mx-auto mt-3 mb-6 rounded"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, #e8d5a3)`,
              }}
            />
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: MUTED }}
            >
              Lifetouch Photography captured some legends over the years.
              Dad kept every single one. Every. Single. One.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {schoolPhotos.map((photo) => (
              <div key={photo.src} className="flex flex-col items-center">
                <div
                  className="polaroid w-full max-w-xs"
                  style={{ transform: `rotate(${photo.rotate})` }}
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={photo.src}
                      alt={`Georgia ${photo.grade}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-3 px-1 pb-1">
                    <p
                      className="text-center font-bold text-base"
                      style={{
                        color: DARK,
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                      }}
                    >
                      {photo.grade} · {photo.year}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed text-center max-w-xs mt-6 italic"
                  style={{ color: MUTED }}
                >
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-16 rounded-xl p-6 text-center max-w-2xl mx-auto"
            style={{ backgroundColor: DARK }}
          >
            <p
              className="text-xl italic"
              style={{
                color: GOLD,
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              &ldquo;The school portrait era: 2005 – 2013. Eight years. Eight
              photos. Infinite memories. One legendary blink.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        id="gallery"
        className="py-24 px-6"
        style={{ backgroundColor: WARM }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: GOLD }}
            >
              27 Years of Evidence
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                color: DARK,
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              Life in Photos
            </h2>
            <div
              className="w-16 h-1 mx-auto mt-3 mb-6 rounded"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, #e8d5a3)`,
              }}
            />
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: MUTED }}
            >
              From dog beach to the culinary stage — a life well-lived,
              well-photographed, and well-captioned by Dad.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryItems.map((item) => (
              <div key={item.src} className="break-inside-avoid">
                <div
                  className="polaroid"
                  style={{ transform: `rotate(${item.rotate})` }}
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-3 px-1">
                    <p
                      className="font-bold text-sm text-center"
                      style={{
                        color: DARK,
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                      }}
                    >
                      {item.caption}
                    </p>
                    <p
                      className="text-xs text-center mt-1 leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {item.subCaption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUN FACTS ── */}
      <section
        id="fun-facts"
        className="py-24 px-6"
        style={{
          background: `linear-gradient(145deg, ${DARK} 0%, #3d2b1a 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: GOLD }}
            >
              Totally True Facts
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                color: "white",
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              Things You Should Know
              <br />
              <span style={{ color: GOLD }}>About Georgia Williams</span>
            </h2>
            <p
              className="text-base mt-8 max-w-xl mx-auto"
              style={{ color: "#d4c4b0" }}
            >
              Verified facts. Absolutely no embellishment. Dad&apos;s honor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: `1px solid rgba(201,169,110,0.2)`,
                }}
              >
                <div className="text-4xl mb-4">{fact.emoji}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    color: GOLD,
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                  }}
                >
                  {fact.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#c4b4a0" }}
                >
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6" style={{ backgroundColor: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: GOLD }}
            >
              The Journey
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                color: DARK,
                fontFamily: "var(--font-playfair, Georgia, serif)",
              }}
            >
              27 Years in 11 Lines
            </h2>
            <div
              className="w-16 h-1 mx-auto mt-3 rounded"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, #e8d5a3)`,
              }}
            />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: "5rem",
                background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
              }}
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 w-20 text-right font-bold text-sm pt-1"
                    style={{
                      color: GOLD,
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                    }}
                  >
                    {m.year}
                  </div>
                  <div
                    className="flex-shrink-0 w-3 h-3 rounded-full mt-1.5 border-2"
                    style={{ backgroundColor: GOLD, borderColor: CREAM }}
                  />
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: DARK }}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-16 px-6 text-center"
        style={{ backgroundColor: DARK }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="w-12 h-px mx-auto mb-8"
            style={{ backgroundColor: GOLD }}
          />
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              color: "white",
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            Happy 27th, Georgia. 🥂
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#d4c4b0" }}
          >
            You showed up in January 1999 and made everything better. You&apos;ve
            grown into someone who is funny, brilliant, kind, and genuinely one
            of the most interesting people I know. Every single embarrassing
            photo on this website was put here with love — and because you gave
            me no veto power over my own domain name purchase.
          </p>
          <p
            className="text-2xl italic mb-8"
            style={{
              color: GOLD,
              fontFamily: "var(--font-playfair, Georgia, serif)",
            }}
          >
            &ldquo;Proud doesn&apos;t even cover it.&rdquo;
          </p>
          <p className="text-sm" style={{ color: "#7a6a5a" }}>
            Made with love (and some good-natured teasing) by Dad ·
            georgiawilliams.com
          </p>
          <div
            className="w-12 h-px mx-auto mt-8"
            style={{ backgroundColor: GOLD }}
          />
        </div>
      </footer>
    </main>
  );
}
