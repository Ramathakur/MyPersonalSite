import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Media Pad Platform",
    description:
      "Multi-domain media platform serving 1M+ resources with dynamic functionality. Led migration from legacy Drupal/PHP to modern stack.",
    tech: ["React", "Node.js", "MongoDB", "PWA", "PayPal", "Apple Pay"],
    role: "Lead Developer - Design & Development",
    impact: "30% server cost reduction, 20% increase in mobile engagement",
    contribution: "Architected single-codebase solution for 50+ domains using JSON-driven configuration with dynamic CSS/feature toggles",
    live: "https://www.love-media.uk",
  },
  {
    title: "BazaarB2B React Native App",
    description:
      "Cross-platform B2B application synced with web portal. Built enterprise features with role-based access control.",
    tech: ["React Native", "Redux", "Redis", "i18n", "Push Notifications"],
    role: "Mobile Developer - Design & Development",
    impact: "40% faster order processing, 10,000+ product catalog",
    contribution: "Implemented virtualized lists and cached API responses for optimal performance",
    github: "https://github.com",
  },
  {
    title: "Unified Visa & Passport Platform",
    description:
      "Consolidated visa application system for 5+ countries with unified portal and dynamic country-specific rendering.",
    tech: ["React", "Node.js", "AWS S3", "Redis", "JWT", "AES-256"],
    role: "Full Stack Developer - Design & Development",
    impact: "65% faster queries, 60% breach reduction, 200GB+ secure storage",
    contribution: "Implemented AWS S3 with IAM policies and Redis search indexing for secure document management",
    live: "https://aruba-edcard.online",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Dynamic payment system with PayPal, Apple Pay, and Google Pay integration with currency-specific rules.",
    tech: ["Node.js", "Express", "PayPal API", "Webhooks"],
    role: "Backend Developer - Design & Development",
    impact: "15% fraud reduction through idempotency keys and webhook security",
    contribution: "Engineered secure payment processing with idempotency keys preventing duplicate transactions",
    github: "https://github.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="section-heading mx-auto">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            Real-world projects showcasing my expertise in web and mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {project.role}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                <p className="text-sm text-foreground/80 mb-4 italic">
                  "{project.contribution}"
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <ArrowRight size={14} className="text-primary" />
                    <span className="font-medium">{project.impact}</span>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
