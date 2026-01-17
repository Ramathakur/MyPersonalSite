import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Download, Linkedin, ArrowUpRight } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/rama-thakur-0b0216150";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="section-subheading mx-auto mb-10">
            I'm currently open to new opportunities. Looking for a dedicated developer 
            who can join your team and ship features from Day 1? Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="mailto:rammathaakur@gmail.com" className="cta-primary w-full sm:w-auto">
              <Mail size={18} />
              Send an Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary w-full sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-xl p-6 border border-border text-left"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Linkedin size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Connect on LinkedIn
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Let's connect professionally. View my complete work history, 
                  recommendations, and professional network.
                </p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View LinkedIn Profile
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground mt-8"
          >
            Based in Indore, India • Available for remote opportunities worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
