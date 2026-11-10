// Shared Framer Motion animation variants for Onboarding

export const slideVariants: any = {
  enter: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 340, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 48 : -48,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 340, damping: 30 },
      opacity: { duration: 0.15 },
    },
  }),
};

export const fadeUp: any = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

