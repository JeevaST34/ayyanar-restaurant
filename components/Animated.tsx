"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

const staggerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const buttonMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.24, ease: "easeOut" },
};

const imageMotion = {
  whileHover: { scale: 1.04 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export function MotionSection({
  className,
  children,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUpVariant}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionArticle({
  className,
  children,
  ...props
}: HTMLMotionProps<"article">) {
  return (
    <motion.article
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariant}
      {...props}
    >
      {children}
    </motion.article>
  );
}

export function MotionDiv({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUpVariant}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionContainer({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerVariant}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionLink({ className, ...props }: HTMLMotionProps<"a">) {
  return <motion.a className={className} {...buttonMotion} {...props} />;
}

export function MotionButton({
  className,
  ...props
}: HTMLMotionProps<"button">) {
  return <motion.button className={className} {...buttonMotion} {...props} />;
}

export function MotionImage({ className, ...props }: HTMLMotionProps<"img">) {
  return <motion.img className={className} {...imageMotion} {...props} />;
}
