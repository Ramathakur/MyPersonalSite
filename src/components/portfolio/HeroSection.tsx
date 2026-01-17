import { motion } from "framer-motion";
import { Download, Github, Mail, Linkedin } from "lucide-react";

const techStack = ["React", "React Native", "Node.js", "TypeScript", "MongoDB", "AWS"];

const LINKEDIN_URL = "https://www.linkedin.com/in/rama-thakur-0b0216150";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="section-container py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-accent rounded-full mb-6">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3"
          >
            Hi, I'm Rama Thakur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl sm:text-2xl text-primary font-semibold mb-4"
          >
            Software Developer | React, React Native, Node.js
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            4+ years of experience building scalable web and mobile applications.
            Full Stack Developer specializing in MERN stack, AWS, and secure API development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="cta-primary">
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mt-10"
          >
            <span className="text-sm text-muted-foreground">Find me on:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
