import { ArrowUpRight, CircleDashed } from "lucide-react";
import Link from "next/link";
import { Icon } from "./ui/IconButton";
import { CardProps } from "@/app/types";
import Image from "next/image";


export default function Card(card: CardProps) {
    return (
        <>
            <div className="p-[8px] border w-fit mx-auto effects-shadow-10  border-[1px] border-border-subtle rounded-md">
                <Image
                    width={400}
                    height={300}
                    alt="Image2"
                    src="https://picsum.photos/id/15/400/300"
                    className=" rounded-md bg-fill-subtle border-none shadow-none "
                />

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

                    <Link href={`docs/${card.slug}/${card.headings?.slug}/${card.headings?.pages?.slug}`}>
                        <Icon
                            variant={"secondary"}
                            icon={<ArrowUpRight size={30} />}
                            iconType="neutral"

                        />
                    </Link>
                </div>
            </div>



        </>
    )
}