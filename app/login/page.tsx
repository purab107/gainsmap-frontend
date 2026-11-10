'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dumbbell, Mail, Lock, Loader2, AlertCircle, User
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Simulate network delay (replace with real auth later)
    await new Promise((r) => setTimeout(r, 800));

    if (mode === 'register') {
      // After register → go to onboarding
      router.push('/?onboarding=true');
    } else {
      // After login → go to dashboard
      router.push('/');
    }
    setIsLoading(false);
  };

  const handleGuest = () => {
    router.push('/');
  };

  const FEATURES = [
    'Exercise Catalog',
    'Workout Logging',
    'Progress Tracking',
    'Routine Builder',
    'PR History',
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* ── Left Panel — Branding (desktop only) ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center relative overflow-hidden p-12">
        {/* Gradient blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-background" />
        <div className="absolute top-20 left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
              <Dumbbell className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-foreground">GainsMap</span>
              <p className="text-xs text-muted-foreground">Workout Intelligence</p>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight">
              Map every rep.<br />Own your strength.
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Smart workout tracking with progressive overload insights, exercise analytics, and muscle heatmaps — built for serious athletes.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <span
                key={f}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-accent border border-primary/20"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { val: '500+', label: 'Exercises' },
              { val: '10k+', label: 'Workouts Logged' },
              { val: '99%', label: 'Uptime' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-accent">{s.val}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right Panel — Auth Form ── */}
      <div className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">

          {/* Mobile Logo */}
          <div className="flex items-center gap-2 lg:hidden mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">GainsMap</span>
            </div>
          </div>

          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {mode === 'login'
                ? 'Sign in to your GainsMap dashboard'
                : 'Start tracking your workouts for free'}
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="grid grid-cols-2 rounded-xl bg-card p-1 border border-border">
            {(['login', 'register'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setError(null); }}
                className={`rounded-lg py-2 text-sm font-medium transition-all ${
                  mode === m
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="athlete@gainsmap.app"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{mode === 'login' ? 'Signing in...' : 'Creating account...'}</span>
                </>
              ) : (
                <span>{mode === 'login' ? 'Sign In' : 'Create Free Account'}</span>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(null); }}
              className="text-accent hover:underline font-medium"
            >
              {mode === 'login' ? 'Register here' : 'Sign in'}
            </button>
          </p>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground">or</span>
            </div>
          </div>

          {/* Guest */}
          <button
            type="button"
            onClick={handleGuest}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 py-2.5 text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground transition-all"
          >
            <User className="h-4 w-4" />
            <span>Continue as Guest</span>
            <span className="ml-1 rounded-full bg-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Limited
            </span>
          </button>

          <p className="text-center text-[11px] text-muted-foreground">
            No account required · browse exercises · no progress history
          </p>
        </div>
      </div>
    </div>
  );
}

