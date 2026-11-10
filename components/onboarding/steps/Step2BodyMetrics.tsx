'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, fadeUp } from '../onboardingAnimations';
import { OnboardingStepper } from '../OnboardingStepper';

interface Step2BodyMetricsProps {
  age: number;
  setAge: (v: number) => void;
  heightCm: number;
  setHeightCm: (v: number) => void;
  weightKg: number;
  setWeightKg: (v: number) => void;
  direction: number;
}

export const Step2BodyMetrics: React.FC<Step2BodyMetricsProps> = ({
  age, setAge, heightCm, setHeightCm, weightKg, setWeightKg, direction,
}) => {
  return (
    <motion.div
      key="step-2"
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
          Tell us about your body
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-2 text-sm sm:text-base text-muted-foreground"
        >
          Used to calculate your baseline metrics and caloric needs.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={2}
        className="w-full divide-y divide-border rounded-xl bg-card border border-border px-4 sm:px-6"
      >
        <OnboardingStepper
          label="Age"
          sublabel="Years old"
          value={age}
          min={14}
          max={100}
          onChange={setAge}
        />
        <OnboardingStepper
          label="Height"
          sublabel="Standing height"
          value={heightCm}
          min={100}
          max={250}
          unit="cm"
          onChange={setHeightCm}
        />
        <OnboardingStepper
          label="Weight"
          sublabel="Current body weight"
          value={weightKg}
          min={30}
          max={300}
          step={0.5}
          unit="kg"
          onChange={setWeightKg}
        />
      </motion.div>

      {/* BMI Hint */}
      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={3}
        className="rounded-xl bg-card border border-border px-4 py-3 flex items-center justify-between"
      >
        <span className="text-xs text-muted-foreground">Estimated BMI</span>
        <span className="text-sm font-bold text-accent font-mono">
          {(weightKg / Math.pow(heightCm / 100, 2)).toFixed(1)}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Step2BodyMetrics;

