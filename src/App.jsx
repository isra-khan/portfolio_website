import React from "react";

const sections = [
  { id: "hero", label: "About" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
];

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-semibold tracking-wide text-primary-300"
          >
            Isra Khan
          </button>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="transition hover:text-primary-300"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-primary-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
          >
            Hire Me
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-16">
        {/* Hero / About Me combined, like mhmz.dev */}
        <section
          id="hero"
          className="mb-20 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center animate-fade-in-up"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
              Flutter Developer · Pakistan
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
              Hello! I&apos;m <span className="text-primary-300">Isra</span>
              <br />
              A Flutter developer building fast, reliable apps.
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Building fast, reliable apps with Flutter — from mobile to desktop. I&apos;ve worked
              on hotel operations, task & earnings tracking, and events platforms, always focusing
              on smooth UX, offline-first workflows, and solid integrations.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/40 transition hover:-translate-y-0.5 hover:bg-primary-400"
              >
                Let&apos;s Talk
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-200"
              >
                View Projects
              </button>
              <span className="text-xs text-slate-400">
                Available for remote Flutter roles & freelance.
              </span>
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-6 animate-float-slow">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(148,27,255,0.24),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(15,23,42,0.9),transparent_55%)]" />
            <div className="relative space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Snapshot
              </p>
              <h2 className="text-lg font-semibold text-slate-50">Flutter-first Developer</h2>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Production experience across mobile and desktop.</li>
                <li>• Focus on performance, offline-first UX, and maintainable code.</li>
                <li>• Comfortable with Firebase, local storage, and integration work.</li>
              </ul>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-[10px] uppercase text-slate-400">Core Stack</p>
                  <p className="mt-1 font-medium text-slate-50">Flutter · Dart</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-[10px] uppercase text-slate-400">Cloud & Data</p>
                  <p className="mt-1 font-medium text-slate-50">Firebase</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-[10px] uppercase text-slate-400">Location</p>
                  <p className="mt-1 font-medium text-slate-50">Pakistan · Remote</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About with a single portrait on the left */}
        <section id="about" className="mb-16">
          <SectionHeader title="About Me" eyebrow="Who I am" />
          <div className="glass-panel mt-6 grid gap-8 rounded-3xl p-6 md:grid-cols-[1.05fr,1.4fr]">
            {/* Left: single portrait */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-primary-500/60 bg-slate-900/80 shadow-xl shadow-black/40">
                <img
                  src={new URL("../isra-profile.jpg", import.meta.url).href}
                  alt="Isra Khan"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
            </div>
            {/* Right: text */}
            <div className="flex flex-col justify-center space-y-4 text-sm text-slate-300 md:text-[15px]">
              <p>
                I&apos;m a Flutter developer from Pakistan who enjoys turning product requirements
                into polished, real-world apps. I care about structure, performance, and getting the
                details right so that users don&apos;t have to think about the tech—it just works.
              </p>
              <p>
                My experience ranges from hotel operations software to event and task-based apps,
                with a strong focus on offline-first design and reliable data sync. I&apos;m
                comfortable working across the full lifecycle—from idea and UX flows to deployment
                and iteration.
              </p>
              <p>
                I&apos;m always learning, experimenting, and refining how I work with Flutter,
                Firebase, and supporting tools to ship better apps faster.
              </p>
              <div className="space-y-4 text-sm text-slate-300">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Quick Facts
                </h3>
                <ul className="space-y-2">
                  <li>• Based in Pakistan · open to remote opportunities.</li>
                  <li>• Strong focus on Flutter and the surrounding ecosystem.</li>
                  <li>• Comfortable with Firebase, local storage, and integrations.</li>
                  <li>• Enjoy working closely with product and design.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack, inspired by mhmz.dev layout */}
        <section id="tech" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Tech Stack" eyebrow="What I work with" />
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            I like to learn new tools quickly, then prove that knowledge by building real things.
            Flutter is my main focus, supported by a web, backend, and Firebase toolkit.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <SkillCard
              title="Languages"
              items={["Dart", "Python", "Java"]}
              highlight="Dart-first thinking with strong fundamentals from Python and Java."
            />
            <SkillCard
              title="Frameworks & Tools"
              items={["Flutter", "HTML", "CSS", "Bootstrap", "JavaScript"]}
              highlight="Flutter as the core, plus solid understanding of the web stack."
            />
            <SkillCard
              title="Backend & Data"
              items={["Firebase", "Git", "GitHub", "Python server-side basics"]}
              highlight="Comfortable with Firebase, auth, and basic backend workflows."
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Projects" eyebrow="Stuff I loved working with" />
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            A few Flutter projects that capture how I think about real-world constraints, offline
            behavior, and user experience.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ProjectCard
              category="Product"
              title="Hotel Operations Desktop App"
              subtitle="Desktop app for hotel operations used across multiple client sites."
              tags={["App", "Desktop", "Flutter"]}
            />
            <ProjectCard
              category="Product"
              title="Gig App – Task & Earnings Tracker"
              subtitle="Track gigs, tasks, and earnings with a simple Flutter workflow."
              tags={["App", "Flutter", "Firebase"]}
            />
            <ProjectCard
              category="Product"
              title="Cage – Fighting Events Platform"
              subtitle="Connect promoters and fighters around upcoming fighting events."
              tags={["App", "Flutter"]}
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button className="text-xs font-semibold text-primary-300 underline-offset-4 hover:text-primary-200 hover:underline">
              See More
            </button>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Experience" eyebrow="Where I've been" />
          <div className="mt-6 space-y-4">
            <ExperienceCard
              role="Flutter Developer"
              company="emetrotel"
              location="Remote / Pakistan"
              period="Dates to be added"
              description="Worked on production-grade Flutter applications used by hotel clients, focusing on performance, reliability, and integrations."
              bullets={[
                "Developed and maintained a Flutter desktop application for hotel operations.",
                "Implemented offline-first workflows backed by local storage.",
                "Integrated Firebase and UCX server for real-time room status and data sync.",
              ]}
            />
            <ExperienceCard
              role="Flutter Projects"
              company="Personal / Freelance"
              location="Remote"
              period="Ongoing"
              description="Building apps like the Gig App and Cage to explore new product ideas and deepen my Flutter expertise."
              bullets={[
                "Designed and shipped task and earnings tracking flows.",
                "Experimented with onboarding, dashboards, and event workflows in Flutter.",
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Education & Certifications" eyebrow="How I learned" />
          <div className="mt-6 glass-panel rounded-3xl p-6 text-sm text-slate-300">
            <p className="text-slate-200">
              I&apos;ll add formal education and certifications here. For now, this section
              highlights that I&apos;m continuously learning and growing my Flutter skills through
              real-world projects, documentation, and community resources.
            </p>
          </div>
        </section>

        {/* Community-style section inspired by mhmz.dev */}
        <section id="community" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Community & Collaboration" eyebrow="Let&apos;s go further together" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <TestimonialCard
              quote="Isra is focused on reliability and user experience. She asks the right questions and ships Flutter apps that actually work for real users."
              name="Future Manager / Client"
              role="Add a real testimonial here later"
            />
            <TestimonialCard
              quote="She takes ownership of Flutter work, cares about edge cases, and iterates quickly. I’d happily work with her again on mobile or desktop projects."
              name="Future Collaborator"
              role="Add a real testimonial here later"
            />
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Writing & Notes" eyebrow="Blog" />
          <div className="mt-6 glass-panel rounded-3xl p-6 text-sm text-slate-300">
            <p>
              I plan to share short write-ups about building Flutter apps, offline-first design,
              Firebase workflows, and lessons from real projects. Blog posts will appear here once
              they&apos;re published.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10 animate-fade-in-up">
          <SectionHeader title="Let’s Build Something" eyebrow="Contact" />
          <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr,1fr]">
            <div className="glass-panel rounded-3xl p-6">
              <form
                className="space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("This form is a front-end demo. Connect it to a backend or email service.");
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name">
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>
                <Field label="What can I help you with?">
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                    placeholder="Project idea, Flutter help, collaboration, etc."
                  />
                </Field>
                <button
                  type="submit"
                  className="rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="glass-panel rounded-3xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Direct Contact
                </h3>
                <div className="mt-3 space-y-1.5 text-sm">
                  <p>
                    <span className="text-slate-400">Email:</span>{" "}
                    <a
                      href="mailto:israkhan.ik1@gmail.com"
                      className="text-primary-300 hover:text-primary-200"
                    >
                      israkhan.ik1@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-400">Phone:</span>{" "}
                    <a
                      href="tel:+92362658490"
                      className="text-primary-300 hover:text-primary-200"
                    >
                      +92 362 658490
                    </a>
                  </p>
                </div>
              </div>
              <div className="glass-panel rounded-3xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Links
                </h3>
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://israkhan.ik1"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-primary-400 hover:text-primary-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://israkhan.ik2"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-primary-400 hover:text-primary-200"
                  >
                    LinkedIn
                  </a>
                  <button className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-primary-400 hover:text-primary-200">
                    Download Resume (add file)
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Prefer async communication? Send me an email with a bit about your project, and
                I&apos;ll reply with ideas, next steps, and timelines.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Isra Khan. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and a dark purple aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-300">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">{title}</h2>
    </div>
  );
}

function SkillCard({ title, items, highlight }) {
  return (
    <div className="glass-panel flex h-full flex-col rounded-3xl p-5 text-sm transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <ul className="mt-3 space-y-1 text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {highlight && <p className="mt-3 text-xs text-slate-400">{highlight}</p>}
    </div>
  );
}

function ProjectCard({ category, title, subtitle, tags }) {
  return (
    <div className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="rounded-full bg-primary-500/10 px-3 py-1 text-[11px] font-medium text-primary-300 ring-1 ring-primary-500/40">
          {category}
        </span>
      </div>
      <div className="mt-3 h-32 bg-gradient-to-br from-slate-800 via-slate-900 to-primary-900/70 px-4 py-3 text-xs text-slate-200">
        <div className="flex h-full items-center justify-center text-center opacity-80">
          <span className="max-w-[90%]">{title}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3 text-sm text-slate-300">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-primary-200 ring-1 ring-primary-500/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ role, company, location, period, description, bullets }) {
  return (
    <div className="glass-panel rounded-3xl p-5 text-sm text-slate-300 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">{role}</h3>
          <p className="text-xs text-slate-400">
            {company} · {location}
          </p>
        </div>
        <p className="text-xs text-slate-500">{period}</p>
      </div>
      <p className="mt-2">{description}</p>
      {bullets && (
        <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="glass-panel h-full rounded-3xl p-5 text-sm text-slate-300 transition-transform duration-300 hover:-translate-y-1">
      <p className="text-sm text-slate-200">“{quote}”</p>
      <div className="mt-3 text-xs text-slate-400">
        <p className="font-semibold text-slate-200">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-slate-300">
      <span className="font-medium text-slate-200">{label}</span>
      {children}
    </label>
  );
}

export default App;


