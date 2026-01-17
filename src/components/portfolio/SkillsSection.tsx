import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layout,
  Smartphone,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Redux Toolkit"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "iOS", "Android", "Push Notifications", "Deep Linking"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database & Cache",
    icon: Database,
    skills: ["MongoDB", "Redis", "Mongoose"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS S3", "AWS IAM", "Git", "GitHub", "CI/CD"],
  },
  {
    title: "Tools & Practices",
    icon: Wrench,
    skills: ["SendGrid", "PayPal API", "Webhook Security", "Agile/Scrum"],
  },
];

const coreSkills = {
  Frontend: ["React", "React Native", "JavaScript", "HTML", "CSS"],
  Backend: ["Node.js", "Express"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "REST APIs"],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-4 block">
            Technical Skills
          </span>
          <h2 className="section-heading mx-auto">My Tech Stack</h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Core Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl p-6 border border-border mb-8"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(coreSkills).map(([category, skills]) => (
              <div key={category}>
                <p className="text-sm font-medium text-primary mb-2">{category}</p>
                <p className="text-sm text-muted-foreground">{skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
