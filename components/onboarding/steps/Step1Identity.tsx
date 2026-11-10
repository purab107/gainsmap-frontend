'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { slideVariants, fadeUp } from '../onboardingAnimations';

interface Step1IdentityProps {
  name: string;
  setName: (v: string) => void;
  sex: 'MALE' | 'FEMALE';
  setSex: (v: 'MALE' | 'FEMALE') => void;
  direction: number;
  canProceed: boolean;
  onEnterNext: () => void;
}

const SEX_OPTIONS = [
  { id: 'MALE' as const, label: 'Male', emoji: '♂' },
  { id: 'FEMALE' as const, label: 'Female', emoji: '♀' },
];

export const Step1Identity: React.FC<Step1IdentityProps> = ({
  name, setName, sex, setSex, direction, canProceed, onEnterNext,
}) => {
  return (
    <motion.div
      key="step-1"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full text-left space-y-7"
    >
      <div>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
        >
          Welcome to GainsMap
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-2 text-sm sm:text-base text-muted-foreground"
        >
          Let's personalize your experience. What should we call you?
        </motion.p>
      </div>

      <div className="space-y-5 w-full">
        {/* Name Input */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="space-y-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
            Your Name or Nickname
          </label>
          <input
            type="text"
            autoFocus
            required
            placeholder="e.g. Alex, Hulk, Coach..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && canProceed && onEnterNext()}
            className="w-full bg-card text-lg sm:text-xl font-medium text-foreground placeholder-muted-foreground rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-primary/70 border border-border transition-all"
          />
        </motion.div>

        {/* Sex Selection */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="space-y-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
            Biological Sex
          </label>
          <div className="grid grid-cols-2 gap-3">
            {SEX_OPTIONS.map((opt) => {
              const isSelected = sex === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSex(opt.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all active:scale-[0.98] ${
                    isSelected
                      ? 'bg-primary/10 border-primary ring-1 ring-primary shadow-md'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className={`text-sm font-semibold ${isSelected ? 'text-foreground' : 'text-foreground/70'}`}>
                      {opt.label}
                    </span>
                  </div>
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? 'border-primary bg-primary text-white' : 'border-border bg-transparent'
                  }`}>
                    {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step1Identity;

