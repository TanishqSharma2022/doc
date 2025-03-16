"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity, ChevronDown, ChevronUp, CircleFadingArrowUp, CircleFadingPlus } from "lucide-react";
import { useState } from "react";
import { RoadmapModal } from "../RoadmapPopup";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RoadmapProps {
    title: string;
    description: string;
    image: string;
    slug: string;
    date: string;
}

export default function Updates({ roadMapData, ChangelogData }: { roadMapData: RoadmapProps[], ChangelogData: RoadmapProps[] }) {
    return (
        <div className="px-[49px] min-h-screen">
            <div className="flex items-center border border-border-subtle border-t-0 justify-center flex-col py-[96px] px-[20px]">
                <h1 className="label-md-medium text-fg-weak font-inter flex items-center justify-center gap-2">
                    <Activity size={20} /> Updates & Upcomings
                </h1>
                <h1 className="display-md-bold text-fg-strong font-inter mt-[12px]">Latest and upcoming capabilities</h1>
                <div className="flex items-center justify-center mt-[48px] gap-4">

                    <Tabs defaultValue="account">
                        <TabsList className="mx-auto">
                            <TabsTrigger className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-border-subtle" value="account">
                                {/* <button className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-border-subtle bg-fill-highlight"> */}
                                <CircleFadingArrowUp size={20} /> Roadmap
                                {/* </button> */}

                            </TabsTrigger>
                            <TabsTrigger className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-border-subtle" value="password">
                                {/* <button > */}
                                <CircleFadingArrowUp size={20} /> Changelog
                                {/* </button> */}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <CardStack cards={roadMapData} />

                            .</TabsContent>
                        <TabsContent className=" mx-auto relative" value="password">
                            <CardStack cards={roadMapData} />
                            {JSON.stringify(ChangelogData)}
                        </TabsContent>
                    </Tabs>





                </div>
                {/* <CardStack /> */}

            </div>
        </div>
    );
}

interface CardProps {
    data: RoadmapProps;
    index: number;
}

const Card: React.FC<CardProps> = ({ data, index }) => {
    const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

    return (
        <div className="flex flex-col lg:flex-row relative mt-12 items-center backdrop-blur-sm bg-white p-[8px] lg:min-w-[450px] w-fit gap-[8px] font-inter mx-auto shadow-sm justify-center">
            <Image
                width={300}
                height={200}
                alt="Image"
                src="https://picsum.photos/id/15/400/300"
                className="min-w-[320px] h-[200px] bg-neutral-200 rounded-[12px]"
            />
            <div className="flex flex-col items-start px-[8px] py-[16px] h-[200px] relative justify-between w-full">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-fg-default display-sm-semibold font-inter">{data.title}</h1>
                    <p className="text-xs-regular w-[344px]">{data.description}</p>
                </div>
                <button
                    onClick={() => setSelectedFeature(index)}
                    className="effects-shadow-5 hover:bg-border-subtle border-border-subtle border rounded-md p-[10px] cursor-pointer"
                >
                    <CircleFadingPlus size={20} />
                </button>
            </div>
            <RoadmapModal isOpen={selectedFeature !== null} onClose={() => setSelectedFeature(null)} data={selectedFeature !== null ? data : null} />
        </div>
    );
};

const CardStack = ({ cards }: { cards: RoadmapProps[] }) => {
    const [isOpen, setIsOpen] = useState(false);


    const buttonPositionY = isOpen ? `${cards.length * 250}%` : "0";

    return (
        <div className={`${isOpen ? "min-h-[1200px]" : "min-h-[600px]"}  mx-auto w-full items-center justify-center `}>
            <div className="w-full mx-auto">
                <Card data={cards[0]} index={0} />
                <div className="relative h-[300px] perspective">
                    <AnimatePresence>
                        {cards.slice(1).map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: -20, rotateX: "10deg", scale: 1 - index * 0.05 }}
                                animate={{
                                    opacity: 1,
                                    y: isOpen ? `${index * 100}%` : `${index * 15}px`,
                                    rotateX: isOpen ? "0deg" : "10deg",
                                    scale: isOpen ? 1 : 1 - index * 0.05,
                                    transition: { duration: 0.3, delay: isOpen ? index * 0.1 : 0 },
                                }}
                                exit={{ opacity: 0, y: 0, transition: { duration: 0.3, delay: (cards.length - index - 1) * 0.1 } }}
                                className="absolute left-0 right-0 origin-top"
                                style={{ zIndex: cards.length - index, transform: `translate3d(0, ${index * 4}px, ${-index * 10}px)` }}
                            >
                                <Card data={card} index={index + 1} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <motion.div
                    className="w-full flex items-center justify-center"
                    initial={{ y: 0 }}
                    animate={{ y: buttonPositionY, transition: { duration: 0.3 } }}
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-white text-fg-default border mx-auto label-md-medium shadow-none flex items-center gap-4 border-none mt-8"
                    >
                        {isOpen ? "Close" : "Full"} Roadmap {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};