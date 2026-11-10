'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { slideVariants, fadeUp } from '../onboardingAnimations';

interface Step3BodyFatProps {
  bodyFatRange: string;
  setBodyFatRange: (v: string) => void;
  sex: 'MALE' | 'FEMALE';
  direction: number;
}

type BodyFatTile = {
  id: string;
  label: string;
  range: string;
  description: string;
  colorClass: string;
  // placeholder gradient — will swap for real images later
  gradientClass: string;
};

const MALE_TILES: BodyFatTile[] = [
  {
    id: 'essential', label: 'Essential', range: '3–5%',
    description: 'Competition lean',
    colorClass: 'text-cyan-400', gradientClass: 'from-cyan-500/30 to-blue-600/20',
  },
  {
    id: 'athletic', label: 'Athletic', range: '6–13%',
    description: 'Visible abs, defined',
    colorClass: 'text-sky-400', gradientClass: 'from-sky-500/25 to-blue-500/15',
  },
  {
    id: 'fit', label: 'Fit', range: '14–17%',
    description: 'Lean, fit appearance',
    colorClass: 'text-blue-400', gradientClass: 'from-blue-500/20 to-indigo-500/15',
  },
  {
    id: 'average', label: 'Average', range: '18–24%',
    description: 'Some muscle definition',
    colorClass: 'text-indigo-300', gradientClass: 'from-indigo-500/20 to-purple-500/10',
  },
  {
    id: 'above_average', label: 'Above Avg', range: '25–31%',
    description: 'Soft, little definition',
    colorClass: 'text-violet-300', gradientClass: 'from-violet-500/20 to-purple-600/10',
  },
  {
    id: 'obese', label: 'High BF', range: '32%+',
    description: 'High body fat',
    colorClass: 'text-purple-300', gradientClass: 'from-purple-500/20 to-pink-500/10',
  },
];

const FEMALE_TILES: BodyFatTile[] = [
  {
    id: 'essential', label: 'Essential', range: '10–13%',
    description: 'Competition lean',
    colorClass: 'text-cyan-400', gradientClass: 'from-cyan-500/30 to-blue-600/20',
  },
  {
    id: 'athletic', label: 'Athletic', range: '14–20%',
    description: 'Very lean, defined',
    colorClass: 'text-sky-400', gradientClass: 'from-sky-500/25 to-blue-500/15',
  },
  {
    id: 'fit', label: 'Fit', range: '21–24%',
    description: 'Fit, toned look',
    colorClass: 'text-blue-400', gradientClass: 'from-blue-500/20 to-indigo-500/15',
  },
  {
    id: 'average', label: 'Average', range: '25–31%',
    description: 'Healthy & normal',
    colorClass: 'text-indigo-300', gradientClass: 'from-indigo-500/20 to-purple-500/10',
  },
  {
    id: 'above_average', label: 'Above Avg', range: '32–39%',
    description: 'Soft, some roundness',
    colorClass: 'text-violet-300', gradientClass: 'from-violet-500/20 to-purple-600/10',
  },
  {
    id: 'obese', label: 'High BF', range: '40%+',
    description: 'High body fat',
    colorClass: 'text-purple-300', gradientClass: 'from-purple-500/20 to-pink-500/10',
  },
];

export const Step3BodyFat: React.FC<Step3BodyFatProps> = ({
  bodyFatRange, setBodyFatRange, sex, direction,
}) => {
  const tiles = sex === 'FEMALE' ? FEMALE_TILES : MALE_TILES;

  return (
    <motion.div
      key="step-3"
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
          Estimate your body fat
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-2 text-sm sm:text-base text-muted-foreground"
        >
          Pick the range that best matches your current physique.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={2}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {tiles.map((tile) => {
          const isSelected = bodyFatRange === tile.id;
          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => setBodyFatRange(tile.id)}
              className={`relative flex flex-col items-start p-4 rounded-xl border transition-all active:scale-[0.97] text-left overflow-hidden ${
                isSelected
                  ? 'border-primary ring-1 ring-primary shadow-lg'
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              {/* Placeholder gradient — swap for real body-composition images later */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradientClass} opacity-70`} />

              {/* Image placeholder area */}
              <div className="relative z-10 w-full h-16 sm:h-20 mb-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-xs text-muted-foreground/60 italic">
                  Photo coming soon
                </span>
              </div>

              {/* Info */}
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`text-sm font-bold ${tile.colorClass}`}>{tile.range}</span>
                  {isSelected && (
                    <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
                    </div>
                  )}
                </div>
                <div className={`text-xs font-semibold ${isSelected ? 'text-foreground' : 'text-foreground/80'}`}>
                  {tile.label}
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{tile.description}</div>
              </div>
            </button>
          );
        })}
      </motion.div>

      <motion.p
        variants={fadeUp} initial="hidden" animate="visible" custom={3}
        className="text-xs text-muted-foreground"
      >
        💡 Reference images will be added soon. Best guess is fine — this helps calibrate your starting point.
      </motion.p>
    </motion.div>
  );
};

export default Step3BodyFat;

