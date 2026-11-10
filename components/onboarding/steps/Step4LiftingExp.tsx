'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { slideVariants, fadeUp } from '../onboardingAnimations';

interface Step4LiftingExpProps {
  experience: string;
  setExperience: (v: string) => void;
  direction: number;
}

const LEVELS = [
  {
    id: 'beginner',
    label: 'Beginner',
    emoji: '🌱',
    desc: 'Less than 1 year of consistent training',
    detail: 'Learning the basics, building habits',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    emoji: '💪',
    desc: '1–3 years of consistent training',
    detail: 'Solid technique, steady progress',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    emoji: '🔥',
    desc: '3–5 years of consistent training',
    detail: 'Strong lifts, structured programming',
  },
  {
    id: 'elite',
    label: 'Elite',
    emoji: '🏆',
    desc: '5+ years, competition-level',
    detail: 'Periodization, peaking cycles',
  },
] as const;

export const Step4LiftingExp: React.FC<Step4LiftingExpProps> = ({
  experience, setExperience, direction,
}) => {
  return (
    <motion.div
      key="step-4"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full text-left space-y-6"
    >
      <div>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
        >
          How long have you been lifting?
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-2 text-sm sm:text-base text-muted-foreground"
        >
          Helps us tailor program complexity and progression rates.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={2}
        className="w-full divide-y divide-border rounded-xl border border-border overflow-hidden"
      >
        {LEVELS.map((lvl) => {
          const isSelected = experience === lvl.id;
          return (
            <div
              key={lvl.id}
              onClick={() => setExperience(lvl.id)}
              className={`flex items-center justify-between px-4 py-4 cursor-pointer transition-all active:scale-[0.995] ${
                isSelected
                  ? 'bg-primary/10'
                  : 'bg-card hover:bg-muted/30'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{lvl.emoji}</span>
                <div>
                  <div className={`text-sm font-semibold ${isSelected ? 'text-foreground' : 'text-foreground/80'}`}>
                    {lvl.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{lvl.desc}</div>
                  {isSelected && (
                    <div className="text-xs text-accent mt-0.5">{lvl.detail}</div>
                  )}
                </div>
              </div>
              <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                isSelected ? 'border-primary bg-primary text-white' : 'border-border bg-transparent'
              }`}>
                {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Step4LiftingExp;

