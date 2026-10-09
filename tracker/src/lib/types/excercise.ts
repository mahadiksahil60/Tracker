export type ExerciseCategory = "push" | "pull" | "legs"

export type MovementPattern =
  | "horizontal_push"
  | "vertical_push"
  | "horizontal_pull"
  | "vertical_pull"
  | "squat"
  | "hinge"
  | "lunge"
  | "carry"
  | "isolation"

export type Muscle =
  | "chest"
  | "lats"
  | "upper_back"
  | "front_delts"
  | "side_delts"
  | "rear_delts"
  | "biceps"
  | "triceps"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves"
  | "abs"

export type Equipment =
  | "barbell"
  | "dumbbell"
  | "cable"
  | "machine"
  | "bodyweight"
  | "other"

export type ExerciseType = "compound" | "isolation"

export type Exercise = {
  id: string
  name: string

  category: ExerciseCategory
  movementPattern: MovementPattern

  primaryMuscles: Muscle[]
  secondaryMuscles: Muscle[]

  equipment: Equipment
  type: ExerciseType
}