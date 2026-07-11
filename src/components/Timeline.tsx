"use client";

import { motion, type Variants } from "framer-motion";

type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <motion.ol
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="border-border flex flex-col gap-8 border-l pl-6"
    >
      {items.map((item) => (
        <motion.li
          key={`${item.title}-${item.period}`}
          variants={itemVariants}
          className="relative"
        >
          <span className="bg-primary absolute top-1.5 -left-[1.6rem] h-2.5 w-2.5 rounded-full" />
          <p className="text-foreground/50 text-xs tracking-wide uppercase">
            {item.period}
          </p>
          <h4 className="text-foreground mt-1 text-base font-semibold">
            {item.title}
          </h4>
          <p className="text-foreground/60 text-sm">{item.subtitle}</p>
          {item.description && (
            <p className="text-foreground/70 mt-2 text-sm leading-relaxed">
              {item.description}
            </p>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
