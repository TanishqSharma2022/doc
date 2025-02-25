"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useState } from "react"


const data = [
    {
        title: "Cxful Design System"
    },
    {
        title: "UIUX Suites "
    }
]


export default function Sidebar() {

    const [activeDropdown, setActiveDropdown] = useState(data[0])

    return (
        <aside className="min-w-[320px] p-[32px] sticky top-16 border-border-subtle border-r min-h-screen">
            <DropdownMenu>
                <DropdownMenuTrigger className=" min-w-[200px] justify-between flex items-center gap-4 border border-border-subtle p-[12px] border-[1px] rounded-[12px]">
                    {activeDropdown.title} <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {data.map((dat) => {
                        return (
                            <DropdownMenuItem
                                onClick={() => setActiveDropdown(dat)}
                                key={dat.title}>{dat.title}</DropdownMenuItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>

        </aside>
    )
}