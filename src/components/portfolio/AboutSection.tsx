import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-heading">
              Full Stack Developer with 4+ Years of Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a professional software developer specializing in web and mobile 
              application development. With expertise in React, React Native, JavaScript, 
              and Node.js, I build scalable, production-ready applications that deliver 
              real business value.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've optimized payment gateway integrations reducing transaction fraud by 15%, 
              led migrations from legacy systems to modern tech stacks cutting server costs by 30%, 
              and mentored junior developers on React/Node.js best practices. I focus on 
              clean, maintainable code that scales.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">4+ Years</p>
                  <p className="text-sm text-muted-foreground">
                    Professional Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    B.E. Computer Science
                  </p>
                  <p className="text-sm text-muted-foreground">
                    RGPV, Indore (CGPA: 7.35)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Users size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Mentor</p>
                  <p className="text-sm text-muted-foreground">
                    Trained 5+ junior developers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Indore, India</p>
                  <p className="text-sm text-muted-foreground">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />
                <p className="font-medium text-foreground">
                  Software Engineer
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  Cyber Infrastructure (P) Ltd • Nov 2021 - Present
                </p>
                <p className="text-sm text-muted-foreground">
                  Building multi-domain media platforms, B2B mobile apps, and 
                  unified visa/passport systems using React, React Native, and Node.js.
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-muted-foreground/30" />
                <p className="font-medium text-foreground">Key Achievements</p>
                <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                  <li>• Reduced API latency by 65% using Redis caching</li>
                  <li>• Migrated 200GB+ storage to AWS S3 (35% cost savings)</li>
                  <li>• 15% fraud reduction via payment security</li>
                  <li>• 20% increase in mobile engagement with PWA</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
