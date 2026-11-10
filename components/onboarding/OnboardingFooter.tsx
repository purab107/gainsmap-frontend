'use client';

import React from 'react';
import { Loader2, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OnboardingFooterProps {
  step: number;
  totalSteps: number;
  loading?: boolean;
  canProceed: boolean;
  onBack: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export const OnboardingFooter: React.FC<OnboardingFooterProps> = ({
  step,
  totalSteps,
  loading,
  canProceed,
  onBack,
  onNext,
  onFinish,
}) => {
  const isLast = step >= totalSteps;

  return (
    <footer className="w-full px-5 sm:px-16 lg:px-24 py-4 sm:py-5 flex items-center justify-between border-t border-border shrink-0 bg-background/95 backdrop-blur z-20 pb-[max(env(safe-area-inset-bottom),1rem)]">
      {/* Back */}
      {step > 1 ? (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      ) : (
        <div />
      )}

      {/* Next / Finish */}
      {!isLast ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onFinish}
          disabled={loading || !canProceed}
          className="flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-4 w-4" />
              <span>Enter GainsMap</span>
            </>
          )}
        </button>
      )}
    </footer>
  );
};

export default OnboardingFooter;

