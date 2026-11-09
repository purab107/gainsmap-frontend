import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dumbbell, PlusCircle, Flame, Trophy, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-1.5">
                  <PlusCircle className="h-4 w-4" />
                  Log Workout
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Quick Log Workout</DialogTitle>
                  <DialogDescription>
                    Enter your routine details to record your sets and reps.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Workout Title
                    </label>
                    <Input placeholder="e.g. Push Day - Chest & Triceps" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Duration (mins)
                      </label>
                      <Input type="number" placeholder="45" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Exercises Count
                      </label>
                      <Input type="number" placeholder="6" />
                    </div>
                  </div>
                  <Button className="w-full mt-2">Start Logging</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-1 w-full space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, Athlete</h2>
          <p className="text-sm text-muted-foreground">
            shadcn/ui base components have been installed and configured successfully.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Weekly Volume
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18,450 kg</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Workouts
              </CardTitle>
              <Dumbbell className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42 sessions</div>
              <p className="text-xs text-muted-foreground mt-1">Consistency score: 94%</p>
            </CardContent>
          </Card>

          <Card>
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

        {/* Featured Routine Showcase */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Base shadcn Setup Verified</CardTitle>
                <CardDescription className="mt-1">
                  Ready for building GainsMap exercises, workout logs, routines, and progress charts.
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                Ready
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">button</Badge>
              <Badge variant="secondary">card</Badge>
              <Badge variant="secondary">input</Badge>
              <Badge variant="secondary">badge</Badge>
              <Badge variant="secondary">dialog</Badge>
              <Badge variant="secondary">dropdown-menu</Badge>
              <Badge variant="secondary">next-themes</Badge>
              <Badge variant="secondary">tailwind v4</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="default">Explore Routines</Button>
            <Button variant="outline">Exercise Catalog</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
