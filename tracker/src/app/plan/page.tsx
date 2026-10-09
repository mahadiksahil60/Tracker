"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

const routines = [
  {
    name: "Push Pull Legs",
    days: 6,
    exercises: 23,
    active: true,
  },
  {
    name: "Upper / Lower",
    days: 4,
    exercises:   16,
    active: false,
  },
    {
    name: "Bro Split",
    days: 7,
    exercises: 100,
    active: false,
  },
]

export default function PlanPage() {
  return (
    <main className="min-h-screen px-4 py-6 pb-24 pt-24 bg-gray-700 text-gray-100">
      <div className="mx-auto max-w-md text-gray-100 ">

        <div>
          <p className="text-sm ">
            YOUR PROGRAMS
          </p>

          <h1 className="mt-1 text-2xl font-semibold">
            Routiness
          </h1>
        </div>

        <div className="mt-6 space-y-3">
          {routines.map((routine) => (
            <Card key={routine.name} className="bg-gray-600 text-gray-100">
              <CardContent className="px-5">

                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {routine.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-100">
                      {routine.days} days / week
                    </p>

                    <p className="text-sm text-gray-100">
                      {routine.exercises} exercises
                    </p>
                  </div>

                  {routine.active && (
                    <Badge className="bg-amber-500 text-black">
                      ACTIVE
                    </Badge>
                  )}
                </div>

                <Button
                //   variant="outline"
                  className="mt-2 w-full text-gray-200 bg-gray-500"
                >
                  View Routine
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="mt-6 w-full bg-gray-800">
          <Plus className="mr-2 size-4" />
          Create Routine
        </Button>

      </div>
    </main>
  )
}