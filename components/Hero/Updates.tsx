"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Activity, ChevronDown, CircleFadingArrowUp, CircleFadingPlus } from "lucide-react";
import { useState } from "react";
export default function Updates() {
    return (
        <div className=" px-[48px] min-h-screen">
            <div className="flex items-center border border-border-subtle  justify-center flex-col py-[96px] px-[20px]">

                <h1 className="label-md-medium text-fg-weak font-inter flex items-center justify-center gap-2"><Activity size={20} />Updates & Upcomings</h1>
                <h1 className="display-md-bold text-fg-strong font-inter mt-[12px]" >Latest and upcoming capabilities</h1>
                <div className="flex items-center justify-center mt-[48px] gap-4">
                    <button className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-[1px] border-border-subtle bg-fill-highlight"><CircleFadingArrowUp size={20} />Roadmap</button>
                    <button className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-[1px] border-border-subtle "><CircleFadingArrowUp size={20} />Changelog</button>
                </div>
                <CardStack />
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className="flex relative mt-12 items-center backdrop-blur-sm bg-white  p-[8px] min-w-[480px] w-fit gap-[8px] font-inter mx-auto  shadow-sm justify-center">
            <img src="#" className="min-w-[320px] h-[200px] bg-neutral-200 rounded-[12px]" />
            <div className=" flex flex-col items-start  px-[8px] py-[16px] h-[200px] relative  justify-between w-full h-[full]">
                <div className="flex flex-col gap-[8px] ">

                    <h1 className="text-fg-default  display-sm-semibold font-inter">Design System</h1>
                    <p className="text-xs-regular w-[344px]">Instead of 1000s of color & size variations, it has every possible component. Instead of 1000s of color & size variations.</p>
                </div>
                <button className="effects-shadow-5 hover:bg-border-subtle border-border-subtle border rounded-md p-[10px] cursor-pointer "><CircleFadingPlus size={20} /></button>

            </div>
        </div>
    )
}

const CardStack = () => {
    const [isOpen, setIsOpen] = useState(false)

    const cards = [
        {
            title: "Design System",
            description: "Comprehensive component library with consistent styling",
            // icon: Palette,
        },
        {
            title: "Performance",
            description: "Optimized for speed and efficiency",
            // icon: Zap,
        },
        {
            title: "Configuration",
            description: "Easily customizable settings and options",
            // icon: Settings,
        },
        {
            title: "Real-time Updates",
            description: "Stay synchronized with latest changes",
            // icon: Clock,
        },
    ]

    // Calculate the position for the button when cards are open
    const buttonPositionY = isOpen ? `${cards.length * 300}%` : 0;

    return (
        <div className={`${isOpen ? "min-h-[1400px]" : "min-h-[600px]"} mx-auto  w-full items-center justify-center p-8`}>
            <div className=" w-full mx-auto">
                <Card />
                <div className="relative  h-[300px] perspective">
                    <AnimatePresence>
                        {cards.map((card, index) => {
                            return (<motion.div
                                key={card.title}
                                initial={{
                                    opacity: 0,
                                    y: -20,
                                    rotateX: "10deg",
                                    scale: 1 - index * 0.05,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: isOpen ? `${index * 85}%` : `${index * 15}px`,
                                    rotateX: isOpen ? "0deg" : "10deg",
                                    scale: isOpen ? 1 : 1 - index * 0.05,
                                    transition: {
                                        duration: 0.3,
                                        delay: isOpen ? index * 0.1 : 0,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: (cards.length - index - 1) * 0.1,
                                    },
                                }}
                                className="absolute left-0 right-0 origin-top"
                                style={{
                                    zIndex: cards.length - index,
                                    transform: `translate3d(0, ${index * 4}px, ${-index * 10}px)`,
                                }}
                            >
                                <Card />
                            </motion.div>)


                        })}
                    </AnimatePresence>
                </div>

                <motion.div
                    className="w-full flex items-center justify-center"
                    initial={{ y: 0 }}
                    animate={{
                        y: buttonPositionY,
                        transition: {
                            duration: 0.3,
                            // delay: isOpen ? cards.length * 0.1 : 0
                        }
                    }}
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-white text-fg-default border mx-auto label-md-medium shadow-none  flex items-center gap-4 border-none mt-8    "
                    >
                        {isOpen ? "Close" : "Full"} Roadmap <ChevronDown />
                    </button>
                </motion.div>
            </div>
        </div>
    )
}