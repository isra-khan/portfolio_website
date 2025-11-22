import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "About" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Form submission handler - commented out for now
  // To enable: uncomment this function and the formStatus state above,
  // then update the form's onSubmit handler and replace 'YOUR_FORM_ID' with your Formspree form ID
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    const formData = new FormData(e.target);
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Get it from https://formspree.io after signing up (free)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        e.target.reset();
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: false });
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };
  */

  return (
    <div className="min-h-screen gradient-bg">
      <header className="sticky top-0 z-30 border-b border-primary-200/50 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-semibold tracking-wide text-primary-500"
          >
            Isra Khan
          </button>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="transition hover:text-primary-500"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-full bg-primary-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400 sm:block"
            >
              Hire Me
            </button>
            {/* Hamburger button for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 p-2 text-slate-700 transition hover:text-primary-500 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute left-0 right-0 top-full z-20 border-b border-primary-200/50 bg-white/95 backdrop-blur transition-all duration-300 md:hidden ${isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
            }`}
        >
          <nav className="mx-auto max-w-6xl flex flex-col px-4 py-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="py-3 text-left text-sm text-slate-700 transition hover:text-primary-500"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400"
            >
              Hire Me
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-16">
        {/* Hero / About Me combined, like mhmz.dev */}
        {/* Hero / About Me combined, like mhmz.dev */}
        <motion.section
          id="hero"
          className="mb-20 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-500">
              Flutter Developer · Pakistan
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Hello! I&apos;m <span className="text-primary-500">Isra</span>
              <br />
              A Flutter developer building fast, reliable apps.
            </h1>
            <p className="max-w-xl text-sm text-slate-600 md:text-base">
              Building fast, reliable apps with Flutter — from mobile to desktop. I&apos;ve worked
              on hotel operations, task & earnings tracking, and events platforms, always focusing
              on smooth UX, offline-first workflows, and solid integrations.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-primary-400"
              >
                Let&apos;s Talk
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-full border border-primary-300 px-5 py-2 text-sm font-medium text-primary-600 transition hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-500"
              >
                View Projects
              </button>
              <span className="text-xs text-slate-500">
                Available for remote Flutter roles & freelance.
              </span>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-6 animate-float-slow">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(32,178,170,0.15),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(46,139,87,0.15),transparent_55%)]" />
              <div className="relative space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                  Flutter Developer
                </p>
                <h2 className="text-lg font-semibold text-slate-900">Flutter-first Developer</h2>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li>• Production experience across mobile and desktop.</li>
                  <li>• Focus on performance, offline-first UX, and maintainable code.</li>
                  <li>• Comfortable with Firebase, local storage, and integration work.</li>
                </ul>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-2xl bg-primary-50/80 p-3">
                    <p className="text-[10px] uppercase text-slate-600">Core Stack</p>
                    <p className="mt-1 font-medium text-slate-900">Flutter · Dart</p>
                  </div>
                  <div className="rounded-2xl bg-primary-50/80 p-3">
                    <p className="text-[10px] uppercase text-slate-600">Cloud & Data</p>
                    <p className="mt-1 font-medium text-slate-900">Firebase</p>
                  </div>
                  <div className="rounded-2xl bg-primary-50/80 p-3">
                    <p className="text-[10px] uppercase text-slate-600">Location</p>
                    <p className="mt-1 font-medium text-slate-900">Pakistan · Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About with a single portrait on the left */}
        {/* About with a single portrait on the left */}
        <motion.section
          id="about"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="About Me" eyebrow="Who I am" />
          </motion.div>
          <motion.div 
            className="glass-panel mt-6 grid gap-8 rounded-3xl p-6 md:grid-cols-[1.05fr,1.4fr]"
            variants={staggerContainer}
          >
            {/* Left: single portrait */}
            <motion.div 
              className="flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-primary-500/60 bg-white shadow-xl shadow-primary-500/20 aspect-[3/4]">
                <img
                  src={new URL("../isra-profile.png", import.meta.url).href}
                  alt="Isra Khan"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
              </div>
            </motion.div>
            {/* Right: text */}
            <motion.div 
              className="flex flex-col justify-center space-y-4 text-sm text-slate-700 md:text-[15px]"
              variants={fadeInUp}
            >
              <p>
                I&apos;m a Flutter developer from Pakistan who enjoys turning product requirements
                into polished, real-world apps. I care about structure, performance, and getting the
                details right so that users don&apos;t have to think about the tech—it just works.
              </p>
              <p>
                My work spans multiple domains, including social media apps, event promotion platforms,
                personal finance trackers, and desktop hospitality applications.

              </p>
              <p>
                I love exploring new technologies and continuously learning.
                I've also volunteered extensively at tech events, supporting
                communities and helping aspiring developers grow.
                Outside of tech, I enjoy UI/UX design, writing, gaming, and reading.
              </p>

            </motion.div>
          </motion.div>
        </motion.section>

        {/* Tech Stack, inspired by mhmz.dev layout */}
        {/* Tech Stack, inspired by mhmz.dev layout */}
        <motion.section
          id="tech"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Tech Stack" eyebrow="What I work with" />
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              I like to learn new tools quickly, then prove that knowledge by building real things.
              Flutter is my main focus, supported by a web, backend, and Firebase toolkit.
            </p>
          </motion.div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </motion.section>

        {/* Projects */}
        {/* Projects */}
        <motion.section
          id="projects"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Projects" eyebrow="Stuff I loved working with" />
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              A few Flutter projects that capture how I think about real-world constraints, offline
              behavior, and user experience.
            </p>
          </motion.div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              category="Product"
              title="Hotel Operations Desktop App"
              subtitle="Desktop app for hotel operations used across multiple client sites."
              tags={["App", "Desktop", "Flutter"]}
              link="https://www.emetrotel.com/software-downloads/"
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
          <motion.div className="mt-8 flex justify-center" variants={fadeInUp}>
            <button className="text-xs font-semibold text-primary-500 underline-offset-4 hover:text-primary-600 hover:underline">
              See More
            </button>
          </motion.div>
        </motion.section>

        {/* Experience */}
        {/* Experience */}
        <motion.section
          id="experience"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Experience" eyebrow="Where I've been" />
          </motion.div>
          <div className="mt-6 space-y-4">
            <ExperienceCard
              role="Flutter Developer"
              company="Emetrotel"
              location="Remote | USA"
              period="Mar 2023 – May 2025"
              description="Worked on production-grade Flutter applications used by hotel clients, focusing on performance, reliability, and integrations."
              bullets={[
                "Developed Flutter desktop application for hotel operations used across multiple client sites.",
                "Implemented offline functionality using local storage for uninterrupted performance.",
                "Integrated Firebase for cloud synchronization and UCX server for real-time room status updates.",
              ]}
            />
            <ExperienceCard
              role="Flutter Developer"
              company="Enterprise64"
              location="Onsite | Pakistan"
              period="Mar 2023 – Mar 2024"
              description="Developed multiple Flutter applications including HR management systems, task tracking apps, and event platforms."
              bullets={[
                "Developed an internal HR Management System in Flutter with an intuitive UI.",
                "Developed Gig, a mobile app for managing tasks and tracking payments.",
                "Built Cage, a mobile platform for fighting events and promoters, enabling event management and participant coordination.",
              ]}
            />
            <ExperienceCard
              role="Trainee"
              company="TPS"
              location="Hybrid | PK"
              period="Mar 2022 – Sep 2022"
              description="Completed Flutter onboarding and training, gaining hands-on experience in mobile app development while contributing to live projects."
              bullets={[
                "Completed Flutter onboarding and training, gaining hands-on experience in mobile app development.",
                "Contributed to development and live projects such as AL-NILE, implementing new features and resolving bugs.",
                "Improved app architecture by integrating GetX for efficient state management in existing Flutter apps.",
                "Utilized standard libraries and REST APIs to ensure scalability and maintainability.",
                "Maintained industry-standard code quality through code reviews, clean architecture, and reusable components.",
                "Collaborated with team members to test, debug, and optimize applications for production readiness.",
              ]}
            />
          </div>
        </motion.section>

        {/* Education */}
        {/* Education */}
        <motion.section
          id="education"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Education & Certifications" eyebrow="How I learned" />
          </motion.div>
          <motion.div 
            className="mt-6 space-y-4"
            variants={fadeInUp}
          >
            <div className="glass-panel rounded-3xl p-6 text-sm text-slate-700">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Bachelor of Computer Science</h3>
                  <p className="text-xs text-slate-600">
                    University of Sindh
                  </p>
                </div>
                <p className="text-xs text-slate-500">2017 – 2021</p>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                CGPA: 3.3 / 4.0
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Community-style section inspired by mhmz.dev */}
        {/* <section id="community" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Community & Collaboration" eyebrow="Let&apos;s go further together" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <TestimonialCard
              quote="Isra is focused on reliability and user experience. She asks the right questions and ships Flutter apps that actually work for real users."
              name="Future Manager / Client"
              role="Add a real testimonial here later"
            />
            <TestimonialCard
              quote="She takes ownership of Flutter work, cares about edge cases, and iterates quickly. I'd happily work with her again on mobile or desktop projects."
              name="Future Collaborator"
              role="Add a real testimonial here later"
            />
          </div>
        </section> */}

        {/* Blog */}
        {/* Blog */}
        <motion.section
          id="blog"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Writing & Notes" eyebrow="Blog" />
          </motion.div>
          <motion.div 
            className="mt-6 glass-panel rounded-3xl p-6 text-sm text-slate-700"
            variants={fadeInUp}
          >
            <p>
              I plan to share short write-ups about building Flutter apps, offline-first design,
              Firebase workflows, and lessons from real projects. Blog posts will appear here once
              they&apos;re published.
            </p>
          </motion.div>
        </motion.section>

        {/* Contact */}
        {/* Contact */}
        <motion.section
          id="contact"
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Let's Build Something" eyebrow="Contact" />
          </motion.div>
          <motion.div 
            className="mt-6"
            variants={staggerContainer}
          >
            {/* Contact form - commented out for now
            <div className="glass-panel rounded-3xl p-6">
              <form
                className="space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("This form is a demo. Connect it to a backend or email service (e.g., Formspree).");
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name">
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>
                <Field label="What can I help you with?">
                  <textarea
                    required
                    name="message"
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
            */}
            <div className="space-y-4 text-sm text-slate-700">
              <motion.div 
                className="glass-panel rounded-3xl p-5"
                variants={fadeInUp}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Direct Contact
                </h3>
                <div className="mt-3 space-y-1.5 text-sm">
                  <p>
                    <span className="text-slate-600">Email:</span>{" "}
                    <a
                      href="mailto:israkhan.ik1@gmail.com"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      israkhan.ik1@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-600">Phone:</span>{" "}
                    <a
                      href="tel:+923423305814"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      +92 342 3305814
                    </a>
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="glass-panel rounded-3xl p-5"
                variants={fadeInUp}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Links
                </h3>
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://github.com/isra-khan/isra-khan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-300 px-3 py-1.5 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/isra-khan1/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-300 px-3 py-1.5 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1lWz6VZQnIR2Yq23M01_0AUgMEvz_R3hPpABEDjQLeJ4/edit?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-300 px-3 py-1.5 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                  >
                    Download Resume
                  </a>
                </div>
              </motion.div>
              <motion.p 
                className="text-xs text-slate-500"
                variants={fadeInUp}
              >
                Prefer async communication? Send me an email with a bit about your project, and
                I&apos;ll reply with ideas, next steps, and timelines.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-primary-200/50 bg-white/90">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Isra Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-500">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h2>
    </div>
  );
}

function SkillCard({ title, items, highlight }) {
  return (
    <motion.div
      className="glass-panel flex h-full flex-col rounded-3xl p-5 text-sm transition-transform duration-300 hover:-translate-y-1"
      variants={fadeInUp}
    >
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1 text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {highlight && <p className="mt-3 text-xs text-slate-600">{highlight}</p>}
    </motion.div>
  );
}

function ProjectCard({ category, title, subtitle, tags, link }) {
  const cardContent = (
    <>
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="rounded-full bg-primary-500/10 px-3 py-1 text-[11px] font-medium text-primary-600 ring-1 ring-primary-500/40">
          {category}
        </span>
      </div>
      <div className="mt-3 h-32 bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200/70 px-4 py-3 text-xs text-slate-800">
        <div className="flex h-full items-center justify-center text-center opacity-80">
          <span className="max-w-[90%]">{title}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3 text-sm text-slate-700">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-xs text-slate-600">{subtitle}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-primary-600 ring-1 ring-primary-500/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
        variants={fadeInUp}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
      variants={fadeInUp}
    >
      {cardContent}
    </motion.div>
  );
}

function ExperienceCard({ role, company, location, period, description, bullets }) {
  return (
    <motion.div
      className="glass-panel rounded-3xl p-5 text-sm text-slate-700 transition-transform duration-300 hover:-translate-y-1"
      variants={fadeInUp}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{role}</h3>
          <p className="text-xs text-slate-600">
            {company} · {location}
          </p>
        </div>
        <p className="text-xs text-slate-500">{period}</p>
      </div>
      <p className="mt-2">{description}</p>
      {bullets && (
        <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="glass-panel h-full rounded-3xl p-5 text-sm text-slate-700 transition-transform duration-300 hover:-translate-y-1">
      <p className="text-sm text-slate-800">"{quote}"</p>
      <div className="mt-3 text-xs text-slate-600">
        <p className="font-semibold text-slate-900">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-slate-700">
      <span className="font-medium text-slate-900">{label}</span>
      {children}
    </label>
  );
}

export default App;


