import { Github, Linkedin, Twitter, Download, ArrowUp } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/rama-thakur-0b0216150";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-footer-foreground/10">
          <div>
            <a href="#" className="text-xl font-semibold text-white">
              Rama<span className="text-primary">.</span>Thakur
            </a>
            <p className="text-sm text-footer-foreground/70 mt-2">
              Software Developer | React, React Native, Node.js
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              <li>
                <a
                  href="#about"
                  className="text-sm text-footer-foreground/70 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-footer-foreground/70 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-footer-foreground/70 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-footer-foreground/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-footer-foreground/10 flex items-center justify-center text-footer-foreground/70 hover:text-white hover:bg-footer-foreground/20 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-footer-foreground/10 flex items-center justify-center text-footer-foreground/70 hover:text-white hover:bg-footer-foreground/20 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-footer-foreground/10 flex items-center justify-center text-footer-foreground/70 hover:text-white hover:bg-footer-foreground/20 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
              title="Download Resume"
            >
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-footer-foreground/50">
            © {new Date().getFullYear()} Rama Thakur. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-footer-foreground/50 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
