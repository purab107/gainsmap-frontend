'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { slideVariants, fadeUp } from '../onboardingAnimations';

interface Step6MusclesFocusProps {
  muscles: string[];
  setMuscles: (v: string[]) => void;
  direction: number;
}

const MUSCLE_GROUPS = [
  { id: 'chest', label: 'Chest', emoji: '🫀' },
  { id: 'back', label: 'Back', emoji: '🦴' },
  { id: 'shoulders', label: 'Shoulders', emoji: '🧲' },
  { id: 'biceps', label: 'Biceps', emoji: '💪' },
  { id: 'triceps', label: 'Triceps', emoji: '🔱' },
  { id: 'core', label: 'Core / Abs', emoji: '⚡' },
  { id: 'quads', label: 'Quads', emoji: '🦵' },
  { id: 'hamstrings', label: 'Hamstrings', emoji: '🏃' },
  { id: 'glutes', label: 'Glutes', emoji: '🍑' },
  { id: 'calves', label: 'Calves', emoji: '🦶' },
  { id: 'forearms', label: 'Forearms', emoji: '🤜' },
  { id: 'full_body', label: 'Full Body', emoji: '🌐' },
];

export const Step6MusclesFocus: React.FC<Step6MusclesFocusProps> = ({
  muscles, setMuscles, direction,
}) => {
  const toggle = (id: string) => {
    if (id === 'full_body') {
      setMuscles(muscles.includes('full_body') ? [] : ['full_body']);
      return;
    }
    const withoutFullBody = muscles.filter((m) => m !== 'full_body');
    if (withoutFullBody.includes(id)) {
      setMuscles(withoutFullBody.filter((m) => m !== id));
    } else {
      setMuscles([...withoutFullBody, id]);
    }
  };

  return (
    <motion.div
      key="step-6"
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
          Any muscle groups to prioritize?
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-2 text-sm sm:text-base text-muted-foreground"
        >
          Select all that apply. We'll give these extra volume in your routines.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={2}
        className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
      >
        {MUSCLE_GROUPS.map((mg) => {
          const isSelected = muscles.includes(mg.id);
          return (
            <button
              key={mg.id}
              type="button"
              onClick={() => toggle(mg.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all active:scale-[0.97] ${
                isSelected
                  ? 'bg-primary/10 border-primary ring-1 ring-primary shadow-md'
                  : 'bg-card border-border hover:border-primary/40'
              }`}
            >
              <span className="text-xl">{mg.emoji}</span>
              <span className={`text-sm font-medium flex-1 text-left ${isSelected ? 'text-foreground' : 'text-foreground/70'}`}>
                {mg.label}
              </span>
              {isSelected && (
                <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </motion.div>

      {muscles.length > 0 && !muscles.includes('full_body') && (
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="text-xs text-accent"
        >
          {muscles.length} muscle group{muscles.length > 1 ? 's' : ''} selected — your routines will emphasize these.
        </motion.p>
      )}

      {muscles.length === 0 && (
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="text-xs text-muted-foreground"
        >
          Skip to let GainsMap balance your program automatically.
        </motion.p>
      )}
    </motion.div>
  );
};

export default Step6MusclesFocus;

