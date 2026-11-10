'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, PlusCircle, Flame, Trophy, TrendingUp, Map } from 'lucide-react';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (searchParams.get('onboarding') === 'true') {
      setShowOnboarding(true);
    }
  }, [searchParams]);

  if (showOnboarding) {
    return <OnboardingWizard />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/30">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">GainsMap</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Workout Tracker</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1.5 py-1 px-3">
              <Flame className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
              <span>5 Day Streak</span>
            </Badge>
            <Button
              size="sm"
              className="gap-1.5 bg-primary hover:bg-primary/90 text-white shadow-primary/25 shadow-md"
              onClick={() => router.push('/login')}
            >
              <PlusCircle className="h-4 w-4" />
              Log Workout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-1 w-full space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back, Athlete</h2>
            <p className="text-sm text-muted-foreground">
              Ready to train? Here's your snapshot.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 border-primary/40 text-accent hover:bg-primary/10"
            onClick={() => router.push('/?onboarding=true')}
          >
            <Map className="h-4 w-4" />
            Setup Profile
          </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Weekly Volume
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18,450 kg</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Workouts
              </CardTitle>
              <Dumbbell className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42 sessions</div>
              <p className="text-xs text-muted-foreground mt-1">Consistency: 94%</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Personal Records
              </CardTitle>
              <Trophy className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14 PRs</div>
              <p className="text-xs text-muted-foreground mt-1">2 new PRs this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Onboarding CTA */}
        <Card className="bg-card border-border border-primary/30 shadow-lg shadow-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>GainsMap is Ready</CardTitle>
                <CardDescription className="mt-1">
                  Set up your profile to unlock personalized workout plans, progression tracking, and muscle heatmaps.
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-accent border-accent/30">
                New
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button
              className="bg-primary hover:bg-primary/90 text-white shadow-primary/25 shadow-md"
              onClick={() => router.push('/?onboarding=true')}
            >
              Start Onboarding
            </Button>
            <Button variant="outline" onClick={() => router.push('/login')}>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 rounded-full border-2 border-primary border-t-transparent" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
