import { ArrowUpRight, CircleDashed } from "lucide-react";

export default function Card({ card }: any) {
    return (
        <>
            <div className="p-[8px] border w-fit mx-auto effects-shadow-10  border-[1px] border-border-subtle rounded-md">

                <img src="#" className="min-h-[300px] min-w-[450px] rounded-md bg-fill-subtle border-none shadow-none " />
                <div className="flex items-center mt-[8px] p-[8px] gap-2">
                    <div className="bg-blue-500 p-[4px] rounded-[12px]">
                        <CircleDashed size={20} color="white" />
                    </div>
                    <h1 className="title-sm-semibold  text-fg-default">
                        {card.title}
                    </h1>
                </div>
                <div className="flex text-fg-weak text-sm-regular items-center  p-[8px] justify-between">
                    <span className="max-w-[300px]">{card.description}</span>
                    <button className="effects-shadow-5 hover:bg-border-subtle cursor-pointer rounded-[6px] border border-border-subtle p-[10px]"><ArrowUpRight /></button>
                </div>
            </div>



        </>
    )
}