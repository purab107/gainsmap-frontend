'use client';

import React from 'react';
import { Dumbbell } from 'lucide-react';

interface OnboardingHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <header className="w-full px-5 sm:px-16 lg:px-24 py-3 sm:py-5 flex flex-col gap-3 shrink-0 z-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-foreground hidden sm:inline">
            GainsMap
          </span>
        </div>

        {/* Step Indicator */}
        <span className="text-xs sm:text-sm font-medium text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
};

export default OnboardingHeader;

