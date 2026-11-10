'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Dumbbell, TrendingUp, Scale, Repeat } from 'lucide-react';
import { slideVariants, fadeUp } from '../onboardingAnimations';

interface Step5FitnessGoalProps {
  goal: string;
  setGoal: (v: string) => void;
  direction: number;
}

const GOALS = [
  {
    id: 'lose_fat',
    label: 'Lose Body Fat',
    icon: Flame,
    desc: 'Caloric deficit — burn fat, preserve muscle',
    colorClass: 'text-orange-400',
    bgClass: 'bg-orange-500/15 border-orange-500/30',
    selectedBg: 'bg-orange-500/20 border-orange-500 ring-1 ring-orange-500',
    iconBg: 'bg-orange-500/20 text-orange-400',
  },
  {
    id: 'build_muscle',
    label: 'Build Muscle',
    icon: Dumbbell,
    desc: 'Caloric surplus — maximize hypertrophy',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/15 border-blue-500/30',
    selectedBg: 'bg-primary/15 border-primary ring-1 ring-primary',
    iconBg: 'bg-primary/20 text-primary',
  },
  {
    id: 'strength',
    label: 'Improve Strength',
    icon: TrendingUp,
    desc: 'Focus on compound lifts & PRs',
    colorClass: 'text-accent',
    bgClass: 'bg-accent/10 border-accent/30',
    selectedBg: 'bg-accent/15 border-accent ring-1 ring-accent',
    iconBg: 'bg-accent/20 text-accent',
  },
  {
    id: 'recomposition',
    label: 'Body Recomposition',
    icon: Repeat,
    desc: 'Lose fat & gain muscle simultaneously',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-500/10 border-purple-500/30',
    selectedBg: 'bg-purple-500/15 border-purple-500 ring-1 ring-purple-500',
    iconBg: 'bg-purple-500/20 text-purple-400',
  },
  {
    id: 'maintain',
    label: 'Maintain & Perform',
    icon: Scale,
    desc: 'Stay at current weight, optimize performance',
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10 border-emerald-500/30',
    selectedBg: 'bg-emerald-500/15 border-emerald-500 ring-1 ring-emerald-500',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
  },
] as const;

export const Step5FitnessGoal: React.FC<Step5FitnessGoalProps> = ({
  goal, setGoal, direction,
}) => {
  return (
    <motion.div
      key="step-5"
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
          What's your primary goal?
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-2 text-sm sm:text-base text-muted-foreground"
        >
          We'll tailor your workouts, volume, and intensity around this.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={2}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {GOALS.map((g) => {
          const Icon = g.icon;
          const isSelected = goal === g.id;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setGoal(g.id)}
              className={`flex items-start gap-4 p-4 rounded-xl border transition-all active:scale-[0.98] text-left ${
                isSelected ? g.selectedBg : `bg-card ${g.bgClass} hover:border-primary/40`
              }`}
            >
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${g.iconBg}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold ${isSelected ? 'text-foreground' : 'text-foreground/80'}`}>
                  {g.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{g.desc}</div>
              </div>
              {isSelected && (
                <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg className="h-3 w-3 text-white stroke-[3]" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                    <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Step5FitnessGoal;

