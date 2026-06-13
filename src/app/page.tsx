import Image from "next/image";
import {
  clientProjects,
  experience,
  externalLinks,
  type ExternalLink,
  privateProjects,
  profile,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  const visibleLinks = externalLinks.filter(
    (link): link is ExternalLink & { href: string } => Boolean(link.href),
  );

  return (
    <div className="site-shell min-h-dvh overflow-x-hidden bg-[var(--surface)] text-[var(--ink)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[6px] focus:bg-[var(--accent)] focus:px-4 focus:py-3 focus:text-[var(--ink)]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="flex min-h-11 items-center gap-3 rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            aria-label="Andreas Siedler home"
          >
            <span className="logo-mark grid size-10 place-items-center rounded-[6px] font-mono text-sm font-semibold text-[var(--ink)]">
              AS
            </span>
            <span className="hidden text-sm font-semibold text-[var(--ink)] sm:block">
              Andreas Siedler
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 text-sm text-[var(--muted)] md:flex"
            aria-label="Primary navigation"
          >
            {["Work", "Private", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="min-h-11 rounded-[6px] px-4 py-3 transition hover:bg-[var(--soft)] hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          id="top"
          className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[calc(100dvh-80px)] lg:grid-cols-[minmax(0,1fr)_minmax(340px,540px)] lg:px-10 lg:py-16"
        >
          <div className="flex flex-col justify-between gap-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex min-h-11 items-center gap-3 rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-3 font-mono text-sm text-[var(--muted)] shadow-[0_0_35px_rgba(56,189,248,0.08)]">
                <span className="status-dot" aria-hidden="true" />
                <span>{profile.location}</span>
                <span className="text-[var(--line-strong)]">/</span>
                <span>Freelance developer</span>
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                {profile.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-[6px] bg-[var(--accent)] px-5 font-semibold text-[var(--ink)] shadow-[0_18px_60px_rgba(255,95,31,0.26)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Email Andreas
                </a>
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-[var(--line-strong)] bg-[var(--panel)] px-5 font-semibold transition hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] hover:bg-[var(--soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  View selected work
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="metric-card rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4"
                  >
                    <p className="font-mono text-xl font-semibold text-[var(--accent-green)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="terminal-card rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-4 font-mono text-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-[var(--line)] pb-3">
                  <span className="size-3 rounded-full bg-[var(--accent)]" />
                  <span className="size-3 rounded-full bg-[var(--accent-amber)]" />
                  <span className="size-3 rounded-full bg-[var(--accent-green)]" />
                  <span className="ml-2 text-[var(--muted)]">portfolio.sh</span>
                </div>
                <p className="text-[var(--muted)]">
                  <span className="text-[var(--accent-green)]">$</span> ship
                  product --stack react,type-safe,ai
                </p>
                <p className="mt-2 text-[var(--ink)]">
                  ready: architecture, frontend craft, mobile delivery, AI
                  workflows
                </p>
              </div>
            </div>
          </div>

          <div className="hero-frame relative min-h-[500px] overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--panel)] sm:min-h-[620px] lg:min-h-full">
            <Image
              src="/andreas-portfolio-field.png"
              alt="Abstract technical field representing React, AI and mobile product work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover opacity-95"
            />
            <div className="portrait-card absolute inset-x-5 top-16 z-10 h-[58%] overflow-hidden rounded-[8px] border border-white/15 bg-black/40 shadow-[0_26px_90px_rgba(0,0,0,0.36)] sm:inset-x-6 sm:top-20 sm:h-[60%] lg:top-16">
              <Image
                src="/andreas-siedler-profile.jpg"
                alt="Andreas Siedler in a collaborative conversation"
                fill
                priority
                sizes="(max-width: 1024px) calc(100vw - 40px), 492px"
                className="object-cover object-[58%_46%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_52%,rgba(0,0,0,0.68)_100%)]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 font-mono text-xs text-white/75">
                <span>human interface: online</span>
                <span className="hidden text-[var(--accent-green)] sm:inline">
                  collaborative mode
                </span>
              </div>
            </div>
            <div className="absolute left-5 top-5 z-20 rounded-[6px] border border-white/15 bg-black/45 px-3 py-2 font-mono text-xs text-white/72 backdrop-blur-md">
              build: green / latency: low / scope: product
            </div>
            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
              <div className="grid gap-2 rounded-[8px] border border-white/16 bg-black/55 p-4 text-white shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <p className="font-mono text-sm text-[var(--accent-cyan)]">
                  Current focus
                </p>
                <ul className="grid gap-2 text-sm leading-6">
                  {profile.focus.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionIntro
          id="work"
          eyebrow="Selected client work"
          title="Products that moved from idea to real users."
          body="A compact view of recent and representative work from the CV, with each card centered on product context, contribution and stack."
        />
        <ProjectGrid projects={clientProjects} />

        <SectionIntro
          id="private"
          eyebrow="Private projects"
          title="Space for current experiments and own products."
          body="These are intentionally placeholders. They are ready for names, links and concrete outcomes once the projects should be public."
        />
        <ProjectGrid projects={privateProjects} variant="private" />

        <section
          id="skills"
          className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-20"
        >
          <div>
            <p className="font-mono text-sm text-[var(--accent-cyan)]">
              Capability stack
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Frontend craft with enough backend range to ship.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="skill-card rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="skill-icon grid size-12 shrink-0 place-items-center rounded-[8px] border border-[var(--line)] bg-[var(--soft)] text-[var(--accent-cyan)]">
                    <SkillGroupIcon name={group.icon} />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[var(--muted)]">
                      stack module
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ink)]">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-[5px] border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-sm text-[var(--muted)]"
                    >
                      <span
                        className="size-1.5 rounded-full bg-[var(--accent-green)]"
                        aria-hidden="true"
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--soft)]/55">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-20">
            <div>
              <p className="font-mono text-sm text-[var(--accent-cyan)]">
                Earlier experience
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                A broad product history across ecommerce, web apps and mobile.
              </h2>
            </div>
            <ol className="grid gap-3">
              {experience.map((item) => (
                <li
                  key={`${item.organization}-${item.period}`}
                  className="timeline-item grid gap-4 rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5 sm:grid-cols-[150px_1fr]"
                >
                  <p className="font-mono text-sm text-[var(--accent-green)]">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="font-semibold">
                      {item.role}, {item.organization}
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--muted)]">
                      {item.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[var(--line)] bg-black/45 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="font-mono text-sm text-[var(--accent-cyan)]">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Have a React, AI or mobile product to build?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              I am available for freelance product work, focused implementation,
              architecture support and pragmatic AI-enabled workflows.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center rounded-[6px] bg-[var(--accent)] px-5 font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {profile.email}
            </a>
            {visibleLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {visibleLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillGroupIcon({
  name,
}: {
  name: "code" | "mobile" | "ai" | "delivery";
}) {
  const commonProps = {
    "aria-hidden": true,
    className: "size-6",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  if (name === "code") {
    return (
      <svg {...commonProps}>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m13 6-2 12" />
      </svg>
    );
  }

  if (name === "mobile") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="2.8" width="10" height="18.4" rx="2.4" />
        <path d="M10.5 6h3" />
        <path d="M11.5 18h1" />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg {...commonProps}>
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M10 10h4" />
        <path d="M10 14h2.5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" />
      <path d="M4 12.5 12 17l8-4.5" />
      <path d="M4 17.5 12 22l8-4.5" />
    </svg>
  );
}

function SectionIntro({
  id,
  eyebrow,
  title,
  body,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section
      id={id}
      className="mx-auto grid w-full max-w-7xl gap-5 px-5 pt-16 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10 lg:pt-20"
    >
      <div>
        <p className="inline-flex rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-mono text-sm text-[var(--accent-cyan)]">
          ./ {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl self-end text-lg leading-8 text-[var(--muted)]">
        {body}
      </p>
    </section>
  );
}

function ProjectGrid({
  projects,
  variant = "client",
}: {
  projects: typeof clientProjects;
  variant?: "client" | "private";
}) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-12">
      {projects.map((project, index) => (
        <article
          key={project.name}
          className="project-card group flex min-h-[390px] flex-col justify-between rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent-cyan)]"
        >
          <div>
            {project.previewImage ? (
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--soft)]">
                <Image
                  src={project.previewImage.src}
                  alt={project.previewImage.alt}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(50vw - 44px), 390px"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_54%,rgba(0,0,0,0.3)_100%)]" />
              </div>
            ) : null}
            <div className="mb-8 flex items-start justify-between gap-4">
              <p className="font-mono text-sm text-[var(--accent-green)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p
                className={`rounded-[5px] px-2.5 py-1 font-mono text-xs ${
                  variant === "private"
                    ? "bg-[var(--warning-soft)] text-[var(--warning)]"
                    : "bg-[var(--soft)] text-[var(--accent-cyan)]"
                }`}
              >
                {project.status ?? project.period}
              </p>
            </div>
            <p className="text-sm font-semibold text-[var(--accent-cyan)]">
              {project.context}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight">
              {project.name}
            </h3>
            <p className="mt-5 leading-7 text-[var(--muted)]">
              {project.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-[5px] border border-[var(--line)] bg-black/20 px-2.5 py-1.5 text-xs font-medium text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>

          {project.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center rounded-[5px] border border-[var(--line-strong)] bg-[var(--soft)] px-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                ) : null,
              )}
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}
