"use client";

import { Home, Dumbbell, ChartNoAxesCombined } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Workout",
        href: "/workout",
        icon: Dumbbell,
    },
    {
        label: "Plan",
        href: "/plan",
        icon: ChartNoAxesCombined,
    },
]

export function BottomNav() {
    const pathname = usePathname()
    return (
        <nav className="fixed inset-x-3 bottom-3 z-50 rounded-xl">
            <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 opacity-100 rounded-xl">
                {NavItems.map((item) => {
                    const Icon = item.icon;
                    const IsActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex min-w-16 flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs transition-colors ${IsActive
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                        >
                            <Icon className="size-5" />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}