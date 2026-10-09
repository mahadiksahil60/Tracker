import { Button } from "../ui/button";


export function NavBar() { 
    return (
        <nav className="fixed inset-x-3 top-3 rounded-xl">
            <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 opacity-100 rounded-xl">
                <span className="text-xl font-bold">Tracker</span>
                <Button className={"rounded-lg"}>Login</Button>
            </div>
        </nav>
    )
};