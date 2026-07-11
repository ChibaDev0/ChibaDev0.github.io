"use client";

import { motion, type Variants } from "framer-motion";
import {
  ACHIEVEMENTS,
  EDUCATION,
  WORK_EXPERIENCE,
} from "@/constants/experience";
import { Timeline } from "@/components/Timeline";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const workItems = WORK_EXPERIENCE.map((item) => ({
  title: item.role,
  subtitle: item.org,
  period: item.period,
  description: item.description,
}));

const educationItems = EDUCATION.map((item) => ({
  title: item.stage,
  subtitle: item.school,
  period: item.period,
}));

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Experience
          </span>
          <h2 className="text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            My Journey
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold tracking-tight">
              Work Experience
            </h3>
            <Timeline items={workItems} />
          </div>
          <div>
            <h3 className="text-foreground mb-6 text-lg font-semibold tracking-tight">
              Education
            </h3>
            <Timeline items={educationItems} />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-foreground mb-6 text-lg font-semibold tracking-tight">
            Achievements & Awards
          </h3>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {ACHIEVEMENTS.map((achievement) => (
              <motion.li
                key={achievement.title}
                variants={itemVariants}
                className="border-border bg-card rounded-card flex flex-col gap-2 border p-5"
              >
                <p className="text-accent text-xs font-medium tracking-wide uppercase">
                  {achievement.event}
                </p>
                <h4 className="text-foreground text-sm font-semibold">
                  {achievement.title}
                </h4>
                <p className="text-foreground/60 text-sm">
                  {achievement.award}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
