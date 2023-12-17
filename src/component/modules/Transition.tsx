// 'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

const Transition = ({ children }: { children: React.ReactNode }) => {
  // const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const variants = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        delay: 0.1,
      },
    },
    out: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div className="  overflow-hidden ">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={pathname}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
