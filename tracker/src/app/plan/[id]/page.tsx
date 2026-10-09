"use client";
import Link from "next/link"
import { ArrowLeft, MoreVertical, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const days = [
  {
    day: "Monday",
    workout: "Push",
    exercises: [
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "8–10",
      },
      {
        name: "Chest Press",
        sets: 3,
        reps: "10",
      },
      {
        name: "Lateral Raise",
        sets: 3,
        reps: "12",
      },
      {
        name: "Tricep Pushdown",
        sets: 3,
        reps: "12",
      },
    ],
  },
  {
    day: "Tuesday",
    workout: "Pull",
    exercises: [
      {
        name: "Lat Pulldown",
        sets: 3,
        reps: "8–10",
      },
      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10",
      },
    ],
  },
  {
    day: "Wednesday",
    workout: "Rest",
    exercises: [],
  },
  {
    day: "Thursday",
    workout: "Push",
    exercises: [
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "8–10",
      },
      {
        name: "Cable Fly",
        sets: 3,
        reps: "12",
      },
    ],
  },
  {
    day: "Friday",
    workout: "Pull",
    exercises: [
      {
        name: "Lat Pulldown",
        sets: 3,
        reps: "10",
      },
      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10",
      },
    ],
  },
  {
    day: "Saturday",
    workout: "Legs",
    exercises: [
      {
        name: "Squat",
        sets: 3,
        reps: "8–10",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: "10",
      },
    ],
  },
  {
    day: "Sunday",
    workout: "Rest",
    exercises: [],
  },
]

export default function RoutinePage() {
  return (
    <main className="min-h-screen px-4 py-6 pb-24 pt-24 bg-gray-700 text-gray-100">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/plan"
            className="flex items-center gap-1 text-sm"
          >
            <ArrowLeft className="size-4" />
            Routines
          </Link>

          <Button
            variant="ghost"
            size="icon"
          >
            <MoreVertical className="size-5" />
          </Button>
        </div>

        {/* Routine Info */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">
              Push Pull Legs
            </h1>

            <Badge className="bg-amber-500 text-black">
              Active
            </Badge>
          </div>

          <p className="mt-2 text-sm">
            6 training days · Repeats weekly
          </p>
        </div>

        {/* Weekly Schedule */}
        <section className="mt-8">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Weekly Schedule
            </h2>
          </div>

          <div className="mt-4 space-y-4">

            {days.map((day) => (
              <Card key={day.day} className="bg-gray-600 text-gray-100">
                <CardContent className="p-4">

                  {/* Day Header */}
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-medium uppercase">
                        {day.day}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold">
                        {day.workout}
                      </h3>
                    </div>

                    {day.exercises.length > 0 && (
                      <span className="text-xs">
                        {day.exercises.length} exercises
                      </span>
                    )}
                  </div>

                  {/* Rest Day */}
                  {day.exercises.length === 0 ? (
                    <div className="mt-4 rounded-lg bg-muted/50 p-4 text-center">
                      <p className="text-sm ">
                        Rest & Recovery. Eat and sleep well.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Exercises */}
                      <div className="mt-4 space-y-2">

                        {day.exercises.map((exercise, index) => (
                          <div
                            key={`${day.day}-${exercise.name}-${index}`}
                            className="flex items-center justify-between rounded-lg border p-3"
                          >
                            <div>
                              <p className="text-sm font-medium">
                                {exercise.name}
                              </p>

                              <p className="mt-1 text-xs ">
                                {exercise.sets} sets · {exercise.reps} reps
                              </p>
                            </div>

                            <span className="text-xs">
                              {index + 1}
                            </span>
                          </div>
                        ))}

                      </div>

                      {/* Add Exercise */}
                      <Button
                        variant="ghost"
                        className="mt-3 w-full bg-gray-500 text-gray-100"
                      >
                        <Plus className="mr-2 size-4" />
                        Add Exercise
                      </Button>
                    </>
                  )}

                </CardContent>
              </Card>
            ))}

          </div>

        </section>

      </div>
    </main>
  )
}