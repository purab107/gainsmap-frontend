'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { OnboardingHeader } from './OnboardingHeader';
import { OnboardingFooter } from './OnboardingFooter';
import { Step1Identity } from './steps/Step1Identity';
import { Step2BodyMetrics } from './steps/Step2BodyMetrics';
import { Step3BodyFat } from './steps/Step3BodyFat';
import { Step4LiftingExp } from './steps/Step4LiftingExp';
import { Step5FitnessGoal } from './steps/Step5FitnessGoal';
import { Step6MusclesFocus } from './steps/Step6MusclesFocus';

const TOTAL_STEPS = 6;

export interface OnboardingData {
  name: string;
  sex: 'MALE' | 'FEMALE';
  age: number;
  heightCm: number;
  weightKg: number;
  bodyFatRange: string;
  experience: string;
  goal: string;
  muscles: string[];
}

export const OnboardingWizard: React.FC = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);

  // ── Form state ──
  const [name, setName] = useState('');
  const [sex, setSex] = useState<'MALE' | 'FEMALE'>('MALE');
  const [age, setAge] = useState(24);
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(75);
  const [bodyFatRange, setBodyFatRange] = useState('');
  const [experience, setExperience] = useState('');
  const [goal, setGoal] = useState('');
  const [muscles, setMuscles] = useState<string[]>([]);

  const goNext = () => {
    if (step < TOTAL_STEPS) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const canProceed = (): boolean => {
    if (step === 1) return name.trim().length > 0;
    if (step === 2) return age > 0 && heightCm > 0 && weightKg > 0;
    if (step === 3) return bodyFatRange !== '';
    if (step === 4) return experience !== '';
    if (step === 5) return goal !== '';
    if (step === 6) return true; // muscle focus is optional
    return true;
  };

  const handleFinish = async () => {
    setLoading(true);
    const data: OnboardingData = {
      name, sex, age, heightCm, weightKg,
      bodyFatRange, experience, goal, muscles,
    };
    // TODO: wire to backend API
    console.log('[GainsMap] Onboarding complete:', data);
    await new Promise((r) => setTimeout(r, 800)); // simulate save
    setLoading(false);
    // Navigate to dashboard and clear onboarding param
    router.replace('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background text-foreground h-[100dvh] max-h-[100dvh] overflow-hidden select-none">

      {/* Header with progress bar */}
      <OnboardingHeader currentStep={step} totalSteps={TOTAL_STEPS} />

      {/* Main step area */}
      <main className="flex-1 min-h-0 w-full px-5 sm:px-16 lg:px-24 flex flex-col justify-center overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="w-full max-w-2xl lg:max-w-3xl mx-auto my-auto py-4 sm:py-6">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <Step1Identity
                name={name} setName={setName}
                sex={sex} setSex={setSex}
                direction={direction}
                canProceed={canProceed()}
                onEnterNext={goNext}
              />
            )}
            {step === 2 && (
              <Step2BodyMetrics
                age={age} setAge={setAge}
                heightCm={heightCm} setHeightCm={setHeightCm}
                weightKg={weightKg} setWeightKg={setWeightKg}
                direction={direction}
              />
            )}
            {step === 3 && (
              <Step3BodyFat
                bodyFatRange={bodyFatRange}
                setBodyFatRange={setBodyFatRange}
                sex={sex}
                direction={direction}
              />
            )}
            {step === 4 && (
              <Step4LiftingExp
                experience={experience}
                setExperience={setExperience}
                direction={direction}
              />
            )}
            {step === 5 && (
              <Step5FitnessGoal
                goal={goal}
                setGoal={setGoal}
                direction={direction}
              />
            )}
            {step === 6 && (
              <Step6MusclesFocus
                muscles={muscles}
                setMuscles={setMuscles}
                direction={direction}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <OnboardingFooter
        step={step}
        totalSteps={TOTAL_STEPS}
        loading={loading}
        canProceed={canProceed()}
        onBack={goBack}
        onNext={goNext}
        onFinish={handleFinish}
      />
    </div>
  );
};

export default OnboardingWizard;

