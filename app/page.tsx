import Image from "next/image";

const experience = [
  {
    company: "Zemoso Labs",
    role: "Platform engineering · Industrial IoT",
    dates: "Apr 2024 — Jul 2026",
    summary:
      "Owned frontend architecture and delivery for a greenfield industrial IoT platform, while taking on platform engineering, security, and AI engineering initiatives.",
    highlights: [
      "Built the Baker Hughes platform as its sole frontend engineer, including reusable architecture and stateful onboarding workflows with XState.",
      "Delivered secure browser-based device access and real-time telemetry workflows using MQTT, WebSockets, mTLS, and Websockify.",
      "Established CI pipelines and automated deployments, and integrated security and container-scanning tools.",
      "Automated the organization's migration from GitHub to self-hosted GitLab.",
      "Mentored 40+ engineers and conducted 130+ React and Node.js interviews.",
    ],
    stack: "React · TypeScript · XState · MQTT · GitHub Actions · ArgoCD · Python",
  },
  {
    company: "Numentica",
    role: "Next.js · CMS platform",
    dates: "Feb 2023 — Apr 2024",
    summary:
      "Built a CMS-driven enterprise platform with reusable Next.js components and integrations across a multi-repository frontend.",
    highlights: [
      "Developed shared page and component libraries for a micro-frontend architecture.",
      "Integrated Contentstack CMS and Bynder digital asset management.",
      "Improved responsive image delivery and collaborated across multiple product repositories.",
    ],
    stack: "Next.js · React · TypeScript · Contentstack · Bynder",
  },
  {
    company: "Leena AI",
    role: "Product engineering · Form builder",
    dates: "Jul 2022 — Dec 2022",
    summary:
      "Created configurable product experiences and reusable frontend tooling for enterprise customer onboarding.",
    highlights: [
      "Built a drag-and-drop form builder from scratch, with nested controls, validation, and configurable workflows.",
      "Packaged a reusable component library for internal product teams.",
      "Delivered task assignment and collaboration workflows.",
    ],
    stack: "React · Vite · Rollup · React Query · React Hook Form",
  },
  {
    company: "MatchPoint Solutions",
    role: "Full stack · Analytics platform",
    dates: "Apr 2022 — Jul 2022",
    summary:
      "Worked across the frontend and backend of an analytics platform, focusing on API performance and background processing.",
    highlights: [
      "Reduced several API response times from approximately 18 seconds to 4 seconds.",
      "Built Django APIs and connected React dashboards to analytics workflows.",
      "Worked with Celery background jobs and backend performance improvements.",
    ],
    stack: "React · Django · Python · Celery",
  },
  {
    company: "Nium",
    role: "Payments · Web and mobile",
    dates: "Aug 2019 — Apr 2022",
    summary:
      "Delivered features across an enterprise payments platform, internal operations tools, and mobile onboarding experiences.",
    highlights: [
      "Built production React applications for the MassPay enterprise platform and onboarding flows across multiple countries.",
      "Helped migrate a JavaScript codebase to TypeScript and contributed Node.js API improvements.",
      "Introduced Cypress end-to-end testing and shared the work at the Mumbai JavaScript Meetup.",
      "Reviewed code, mentored engineers, and conducted approximately 40 technical interviews.",
    ],
    stack: "React · React Native · TypeScript · Cypress · Node.js · AWS",
  },
  {
    company: "Hexaware Technologies",
    role: "Frontend engineering · Logistics",
    dates: "Feb 2019 — Jul 2019",
    summary:
      "Helped build an enterprise logistics application from the ground up.",
    highlights: [
      "Designed reusable React architecture and established project conventions.",
      "Built complex multi-step forms with advanced validation.",
      "Created component patterns that supported onboarding as the engineering team grew.",
    ],
    stack: "React · JavaScript · Frontend architecture",
  },
  {
    company: "IdeaToStartup",
    role: "Full Stack Developer",
    dates: "Jun 2018 — Dec 2018",
    summary:
      "Developed features for early-stage web products and explored cross-platform application development.",
    highlights: [
      "Built React applications consuming GraphQL APIs and contributed to Node.js-backed products.",
      "Worked across product prototypes and learned React Native and Styled Components.",
    ],
    stack: "React · GraphQL · Node.js · React Native",
  },
  {
    company: "Nagarro",
    role: "Frontend Developer",
    dates: "Feb 2014 — May 2018",
    summary:
      "Built a strong foundation in frontend engineering through enterprise products, mobile experiences, and client platforms.",
    highlights: [
      "Developed customer-facing and internal applications with JavaScript, Angular, Ionic, and responsive web technologies.",
      "Built CRM dashboards and extensions for Salesforce, Microsoft Dynamics, and SharePoint.",
      "Contributed to a cross-platform conferencing app through feature delivery, maintenance, refactoring, and performance improvements.",
    ],
    stack: "JavaScript · Angular · Ionic · Salesforce · SharePoint",
  },
];

const projects = [
  {
    number: "01",
    category: "Industrial IoT · Platform engineering",
    name: "Connected operations, built for the browser",
    description:
      "Sole frontend engineer on a greenfield industrial IoT platform for Baker Hughes. Built the React foundation, reusable UI, and XState-powered onboarding, with secure browser-to-device workflows and real-time telemetry.",
    tags: ["React", "XState", "MQTT", "WebSockets", "mTLS"],
  },
  {
    number: "02",
    category: "Developer tooling · Product engineering",
    name: "A form builder teams could shape",
    description:
      "Built a configurable drag-and-drop form builder from scratch, including nested fields, a validation engine, and reusable workflows for enterprise onboarding.",
    tags: ["React", "Vite", "Rollup", "React Hook Form"],
  },
  {
    number: "03",
    category: "Payments · Enterprise software",
    name: "Payments and onboarding at scale",
    description:
      "Delivered React features for an enterprise MassPay platform and React Native onboarding experiences across multiple countries, while helping strengthen testing and TypeScript adoption.",
    tags: ["React", "React Native", "TypeScript", "Cypress"],
  },
  {
    number: "04",
    category: "Performance · Full stack",
    name: "Faster analytics APIs",
    description:
      "Improved several Django API response times from approximately 18 seconds to 4 seconds, while building the React analytics experience and working with background jobs.",
    tags: ["React", "Django", "Python", "Celery"],
  },
];

const expertise = [
  {
    title: "Frontend & product",
    skills:
      "React, Next.js, TypeScript, JavaScript, React Native, state management, design systems, accessibility, responsive UI",
  },
  {
    title: "Backend & data",
    skills:
      "Node.js, Express, Python, Django, FastAPI, GraphQL, PostgreSQL, MongoDB, REST APIs, WebSockets",
  },
  {
    title: "Cloud & delivery",
    skills:
      "AWS, Docker, Kubernetes, Terraform, GitHub Actions, ArgoCD, CI/CD, cloud deployments, security scanning",
  },
  {
    title: "Quality & modern engineering",
    skills:
      "Cypress, Jest, React Testing Library, Vitest, OAuth2, JWT, AI-assisted development, LangChain, agent workflows",
  },
];

const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-vjain/" },
  { label: "GitHub", href: "https://github.com/akshayjai1" },
  { label: "LeetCode", href: "https://leetcode.com/akshayvjain/" },
  { label: "Medium", href: "https://akshayvjain.medium.com/" },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5.5 14.5 14 6m0 0H7m7 0v7" />
      ) : (
        <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5" />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Akshay Jain, home">
            <span className="wordmark-mark">AJ</span>
            <span>Akshay Jain</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="mailto:theakshay.jain@gmail.com">
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Principal Full Stack Engineer <span className="eyebrow-divider">/</span>{" "}
              12+ years
            </p>
            <h1>
              I build software
              <br />
              that moves work
              <br />
              <span>forward.</span>
            </h1>
            <p className="hero-intro">
              I turn complex product and engineering problems into dependable
              software — from thoughtful interfaces and backend APIs to cloud
              delivery and the systems that help teams move faster.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:theakshay.jain@gmail.com">
                Get in touch <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-socials" aria-label="Professional profiles">
              {profiles.map((profile) => (
                <a
                  href={profile.href}
                  key={profile.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.label} <ArrowIcon diagonal />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                className="portrait"
                src="/akshay-profile-image-1.png"
                alt="Portrait of Akshay Jain"
                width={537}
                height={604}
                priority
                sizes="(max-width: 760px) 80vw, (max-width: 1100px) 42vw, 440px"
              />
              <div className="portrait-caption">
                <span className="caption-label">Based in</span>
                <span>Amravati, India</span>
              </div>
            </div>
            <div className="orbit-note" aria-hidden="true">
              <span>Product-minded</span>
              <span>End-to-end</span>
              <span>Built to last</span>
            </div>
            <span className="hero-index" aria-hidden="true">
              PORTFOLIO&nbsp; / &nbsp;2026
            </span>
          </div>
        </section>

        <section className="proof-band" aria-label="Career highlights">
          <div className="proof-inner">
            <div className="proof-item">
              <strong>12<span>+</span></strong>
              <span>years building software</span>
            </div>
            <div className="proof-item">
              <strong>170<span>+</span></strong>
              <span>technical interviews</span>
            </div>
            <div className="proof-item">
              <strong>40<span>+</span></strong>
              <span>engineers mentored</span>
            </div>
            <div className="proof-item proof-item-result">
              <strong>18s <span className="proof-arrow">→</span> 4s</strong>
              <span>API response time reduced</span>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">Selected work</p>
              <h2>Thoughtful engineering.<br />Tangible outcomes.</h2>
            </div>
            <p className="section-aside">
              A few examples of the platforms, products, and engineering
              improvements I&apos;ve helped bring to life.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-kicker">Experience</p>
                <h2>12+ years of making<br />the complex work.</h2>
              </div>
              <p className="section-aside">
                From hands-on product delivery to platform ownership, team
                enablement, and the engineering practices behind reliable
                releases.
              </p>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-entry" key={job.company}>
                  <div className="timeline-date">{job.dates}</div>
                  <div className="timeline-content">
                    <div className="timeline-title">
                      <div>
                        <h3>{job.company}</h3>
                        <p className="job-role">{job.role}</p>
                      </div>
                      <span className="timeline-marker" aria-hidden="true" />
                    </div>
                    <p className="job-summary">{job.summary}</p>
                    <ul className="job-highlights">
                      {job.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <p className="job-stack">{job.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="about">
          <div className="about-grid">
            <div>
              <p className="eyebrow section-kicker">How I work</p>
              <h2>Engineer the whole.<br /><span>Care about the details.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a hands-on engineer who enjoys joining the dots between
                product intent, user experience, architecture, and production.
                Over the last 12+ years, I&apos;ve worked across startups and
                enterprise teams, building products from a blank page and
                improving systems already in motion.
              </p>
              <p>
                I care about clear interfaces, maintainable foundations, and
                releases teams can trust. I also enjoy making engineering
                knowledge shareable — through mentoring, interviews,
                documentation, and practical tooling.
              </p>
              <div className="education-card">
                <span className="education-icon" aria-hidden="true">MSc</span>
                <div>
                  <strong>Mathematics &amp; Electronics</strong>
                  <span>Dual Degree · BITS Pilani · 2009–2014</span>
                  <span>GATE 2014 · All India Rank 414</span>
                </div>
              </div>
              <div className="credentials">
                <a
                  href="https://www.credly.com/badges/30b771d8-1c95-45cb-b72d-2c795904b62e"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Certified Machine Learning Engineer
                  <ArrowIcon diagonal />
                </a>
                <p>
                  Frontend mentor at GreyAtom (2020–2021) · Author of the
                  <a
                    href="https://www.npmjs.com/package/immer-context"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}immer-context npm library
                    <ArrowIcon diagonal />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="expertise">
            <div className="expertise-heading">
              <p className="eyebrow section-kicker">Capabilities</p>
              <h2>Tools are choices.<br />Good judgment is the craft.</h2>
            </div>
            <div className="expertise-list">
              {expertise.map((group, index) => (
                <article className="expertise-item" key={group.title}>
                  <span className="expertise-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <p>{group.skills}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <p className="eyebrow">Have a meaningful problem to solve?</p>
            <h2>Let&apos;s build something<br />people can rely on.</h2>
            <a className="button button-light" href="mailto:theakshay.jain@gmail.com">
              theakshay.jain@gmail.com <ArrowIcon diagonal />
            </a>
            <div className="contact-links">
              {profiles.map((profile) => (
                <a
                  href={profile.href}
                  key={profile.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.label} <ArrowIcon diagonal />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="wordmark" href="#top">
            <span className="wordmark-mark">AJ</span>
            <span>Akshay Jain</span>
          </a>
          <span>Principal Full Stack Engineer · Amravati, India</span>
          <a href="#top" className="back-to-top">
            Back to top ↑
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Akshay Jain</p>
      </footer>
    </>
  );
}
