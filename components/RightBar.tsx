import { Asterisk, Figma } from "lucide-react";

export default function Rightbar() {
    return (
        <div className="min-w-[320px] px-[48px] py-[32px] bg-layer-subtle border border-border-subtle min-h-screen">
            <h1 className="title-xs-semibold text-fg-weak">Actions & Resources</h1>

            <h1 className="label-sm-medium mt-[32px]">Start a project with</h1>

            <div className="flex flex-col items-start mt-[12px] gap-[16px]">

                <button className="flex label-sm-medium items-center gap-2 border border-border-subtle p-[12px] w-full rounded-[12px] border-[1px] bg-layer-base effects-shadow-5">
                    <Asterisk size={20} />
                    Cxful Studio
                    <span className=" border-border-brand-subtle rounded-full border label-xxs-medium text-fg-brand-weak px-[6px] py-[2px]">
                        PRE-BETA
                    </span>
                </button>
                <button className="flex items-center label-sm-medium gap-2 border border-border-subtle p-[12px] w-full rounded-[12px] border-[1px] bg-layer-base effects-shadow-5">
                    <Figma size={20} />
                    UIUX Suite
                </button>
                <button className="flex items-center label-sm-medium gap-2 border border-border-subtle p-[12px] w-full rounded-[12px] border-[1px] bg-layer-base effects-shadow-5">
                    <Figma size={20} />
                    Design System
                </button>
            </div>

        </div>
    )
}