import { BottomNav } from "@/components/app/BottomNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-6 pb-24 pt-24 bg-gray-700">
      <div className="mx-auto max-w-md">
        <section>
          <p className="text-sm text-gray-100 text-white">
            Good morning
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-yellow-500">
            Ready for today?
          </h1>

        {/* workout card */}
        <Card className="mt-6 bg-gray-600 text-gray-100">
          <CardContent className="py-1 px-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-100">
                  TODAY'S WORKOUT
                </p>
                <h2 className="mt-1 text-xl font-semibold">
                  Push Day
                </h2>
              </div>
              <Badge variant="secondary">
                55 min
              </Badge>
            </div>

            <p className="mt-1 text-sm text-gray-100">
              Chest · Shoulders · Triceps
            </p>

            <Button className="mt-1 w-full text-gray-200 bg-gray-500">
              Start Workout
            </Button>
          </CardContent>
        </Card>  
        
        {/* Progress */}
        <section className="mt-8 text-gray-100">
          <h2 className="text-lg font-semibold">
            Your Progress
          </h2>

          <div className="mt-3 grid grid-cols-2 gap-3">

            <Card className="bg-gray-600 text-gray-100">
              <CardContent className="px-4">
                <p className="text-sm text-white-100">
                  Body Weight
                </p>

                <p className="mt-1 text-2xl font-semibold">
                  69.4 kg
                </p>

                <p className="mt-1 text-xs text-gray-100">
                  +1.2 kg this month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-600 text-gray-100">
              <CardContent className="px-4">
                <p className="text-sm text-gray-100">
                  Strength
                </p>

                <p className="mt-1 text-2xl font-semibold">
                  +12%
                </p>

                <p className="mt-1 text-xs text-gray-100">
                  Last 4 weeks
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        <section className="mt-8 text-gray-100">
          <h2 className="text-lg font-semibold">
            💡 Today's Insight
          </h2>

          <Card className="mt-3 bg-gray-600">
            <CardContent className="px-5">
              <p className="text-sm leading-6 text-gray-100">
                Your pressing strength has been improving
                consistently. Keep your current training
                volume and focus on progressive overload.
              </p>
            </CardContent>
          </Card>               
        </section>      
          </section>  
    </div>
    </main>
  );
}
