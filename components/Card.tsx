import { ArrowUpRight, CircleDashed } from "lucide-react";

export default function Card({card}) {
    return (
        <>
            <div className="font-inter p-[8px] border border-[1px] border-neutral-200 rounded-md">

                <div className="w-full min-h-[320px] rounded-md bg-fill-subtle">
                </div>
                <div className="flex items-center mt-[8px] p-[8px] gap-2">
                    <div className="bg-blue-500 p-[4px] rounded-[12px]">
                    <CircleDashed size={20} color="white" />
                    </div>
                    <h1 className="display-sm-bold text-fg-default">
                        {card.title}
                    </h1>
                </div>
                <div className="flex items-center mt-[8px] justify-between">
                    <p>{card.description}</p>
                    <button className="shadow-sm rounded-md p-[10px]"><ArrowUpRight /></button>
                </div>
            </div>



        </>
    )
}