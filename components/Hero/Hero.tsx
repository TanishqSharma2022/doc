import { ArrowRight, CircleFadingPlus } from "lucide-react";
import { Button } from "../ui/Button";
import Card from "../Card";
import { sanityFetch } from "@/sanity/lib/client";
import { categoryCardQuery, categoryWithHeadingsQuery } from "@/sanity/lib/queries";


const cardData = [
    {
        id: 1,
        title: "Cxful Design System",
        description: "Stop cloning beautiful designs, ship high value project with powerful",
        image: "",
        link: "docs/cxful-design-system/design-system/overview"
    },
    {
        id: 2,
        title: "UIUX Design Kit",
        description: "Stop cloning beautiful designs, ship high value project with powerful",
        image: "",
        link: "/docs/uiux-suites/development-guides/overview"
    },
    {
        id: 3,
        title: "Development Sync",
        description: "Stop cloning beautiful designs, ship high value project with powerful",
        image: "",
        link: "/docs/development-sync/development-guides/overview"
    },
]


export default async function Hero() {
    const data = await sanityFetch({query: categoryCardQuery})
    console.log(data)
    return (
        <>
            <div className="flex border border-[1px] border-border-subtle  px-[48px] flex-col  w-full items-center justify-center">
                <div className="border border-[1px] border-b-[0px] border-border-subtle  w-full h-full">
                    <div className="mx-auto flex py-[64px] px-[20px]  text-center flex-col items-center justify-center  max-w-[390px] xs:max-w-[350px] sm:max-w-[600px] md:max-w-[808px] lg:max-w-[850px] space-y-6 md:space-y-8">

                        <p className="flex flex-col gap-[12px]">

                            <span className="display-xl-bold text-fg-strong">Cxful UIUX Suite</span>
                            <span className="display-md-medium">Design & Handoff Guides</span>
                        </p>
                        <div className="flex mt-[24px] items-center justify-center gap-4">
                            <Button
                                className="py-3xl label-lg-medium px-4xl"
                                buttonType="brand"
                                variant={'default'}
                                leftIcon={<CircleFadingPlus size={15} />}>Upgrade your design</Button>
                            <Button
                                buttonType="neutral"
                                variant={'secondary'}
                                rightIcon={<ArrowRight size={20} />}>Getting Started</Button>
                        </div>
                        <p className="mx-auto text-lg-regular text-text-lg text-fg-default mx-auto ">Every bits and pixel of custom & headless experience design. Navigate, and implement yourself or with the whole team.</p>
                    </div>

                </div>

            </div>
            <div >
                <div className="px-[48px] border-t-[0px]   border-[1px] border-border-subtle">

                    <div className="grid grid-cols-1 border border-t-[0px] border-b-[0px] md:grid-cols-3 divide-x-[1px]  place-items-center justify-center ">
                        {
                            data.map((card) => {
                                return (
                                    <div key={card._id} className="p-[32px]  w-full  border-b-[0px]  border-border-subtle ">
                                        <Card {...card} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>

    )
}