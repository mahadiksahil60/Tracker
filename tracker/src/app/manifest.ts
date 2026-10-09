import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Workout Tracker",
    short_name: "Workout",
    description: "Track workouts, progress and training insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#344054",
    theme_color: "#344054",
    orientation: "portrait",
    // icons: [
    //   {
    //     src: "/icons/icon-192.png",
    //     sizes: "192x192",
    //     type: "image/png",
    //   },
    //   {
    //     src: "/icons/icon-512.png",
    //     sizes: "512x512",
    //     type: "image/png",
    //   },
    // ],
  }
}