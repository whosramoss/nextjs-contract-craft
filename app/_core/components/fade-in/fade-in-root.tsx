"use client";

import { useAnimationFadeIn } from "@/app/_core/hooks/use-animation-fade-in";
import { motion } from "framer-motion";

interface FadeInRootProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FadeInRoot({ children }: FadeInRootProps) {
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const motionProps = {
    ref: animateRef,
    initial,
    animate,
  };

  return (
    <motion.div aria-hidden="true" {...motionProps}>
      {children}
    </motion.div>
  );
}
