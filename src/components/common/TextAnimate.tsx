import React, { FC } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface TextAnimateProps {
  text: string;
  animationKey: string | number;
  onAnimationComplete?: () => void;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const TextAnimate: FC<TextAnimateProps> = ({
  text,
  animationKey,
  onAnimationComplete,
  className,
}) => {
  const words = text.split(' ');

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={animationKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={(definition) => {
          if (definition === 'visible' && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
        className={className}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            style={{ display: 'inline-block', marginRight: '0.3em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
};

export default TextAnimate;
