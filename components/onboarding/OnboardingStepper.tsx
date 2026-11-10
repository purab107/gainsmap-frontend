'use client';

import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface OnboardingStepperProps {
  label: string;
  sublabel: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (val: number) => void;
}

export const OnboardingStepper: React.FC<OnboardingStepperProps> = ({
  label,
  sublabel,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}) => {
  return (
    <div className="py-4 sm:py-5 flex items-center justify-between">
      <div>
        <div className="text-base sm:text-lg font-medium text-foreground">{label}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">{sublabel}</div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => onChange(parseFloat(Math.max(min, value - step).toFixed(1)))}
          disabled={value <= min}
          className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-colors active:scale-90"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-16 text-center text-xl font-bold font-mono text-foreground">
          {value}
          {unit && <span className="text-xs font-normal text-muted-foreground ml-0.5">{unit}</span>}
        </span>
        <button
          type="button"
          onClick={() => onChange(parseFloat(Math.min(max, value + step).toFixed(1)))}
          disabled={value >= max}
          className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-colors active:scale-90"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingStepper;

