
"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const exercises = [
  {
    name: "Incline Dumbbell Press",
    muscle: "Chest",
  },
  {
    name: "Bench Press",
    muscle: "Chest",
  },
  {
    name: "Chest Press",
    muscle: "Chest",
  },
  {
    name: "Cable Fly",
    muscle: "Chest",
  },
  {
    name: "Lateral Raise",
    muscle: "Shoulders",
  },
  {
    name: "Shoulder Press",
    muscle: "Shoulders",
  },
  {
    name: "Rear Delt Fly",
    muscle: "Shoulders",
  },
  {
    name: "Lat Pulldown",
    muscle: "Back",
  },
  {
    name: "Seated Cable Row",
    muscle: "Back",
  },
  {
    name: "Barbell Squat",
    muscle: "Legs",
  },
  {
    name: "Leg Press",
    muscle: "Legs",
  },
  {
    name: "Tricep Pushdown",
    muscle: "Triceps",
  },
  {
    name: "Bicep Curl",
    muscle: "Biceps",
  },
]

type AddExerciseSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd?: (exercise: (typeof exercises)[number]) => void
}

export function AddExerciseSheet({
  open,
  onOpenChange,
  onAdd,
}: AddExerciseSheetProps) {
  const [search, setSearch] = useState("")

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleAdd(exercise: (typeof exercises)[number]) {
    onAdd?.(exercise)
    onOpenChange(false)
    setSearch("")
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="mx-auto max-w-md rounded-t-3xl"
      >
        <SheetHeader>
          <SheetTitle>Add Exercise</SheetTitle>
        </SheetHeader>

        <div className="mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search exercises..."
              className="pl-9"
            />
          </div>

          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            <div className="space-y-2">
              {filteredExercises.map((exercise) => (
                <button
                  key={exercise.name}
                  onClick={() => handleAdd(exercise)}
                  className="flex w-full items-center justify-between rounded-xl border p-4 text-left transition-colors hover:bg-muted"
                >
                  <div>
                    <p className="font-medium">
                      {exercise.name}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {exercise.muscle}
                    </p>
                  </div>

                  <Plus className="size-5 text-muted-foreground" />
                </button>
              ))}

              {filteredExercises.length === 0 && (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No exercises found
                </div>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}