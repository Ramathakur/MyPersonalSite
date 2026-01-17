import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Rocket, Users, Code } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description:
      "I thrive on tackling complex challenges. From debugging tricky issues to architecting scalable solutions, I approach problems analytically and deliver results.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Experience",
    description:
      "I've built and shipped real-world applications used by thousands. I understand what it takes to go from concept to production—and to maintain it.",
  },
  {
    icon: Users,
    title: "Team Player & Mentor",
    description:
      "I collaborate effectively with cross-functional teams and have experience mentoring junior developers, conducting code reviews, and sharing knowledge.",
  },
  {
    icon: Code,
    title: "Clean, Maintainable Code",
    description:
      "I write code that other developers can understand and extend. I follow best practices, write tests, and document my work for long-term sustainability.",
  },
];

const WhyHireMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-4 block">
            Why Work With Me
          </span>
          <h2 className="section-heading mx-auto">
            I can ship features from Day 1
          </h2>
          <p className="section-subheading mx-auto">
            What I bring to your team beyond technical skills
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <reason.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
