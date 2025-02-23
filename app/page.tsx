import Card from "@/components/Card";
import { Button } from "@/components/ui/Button";
import { PillLabel } from "@/components/ui/Pill-Label";
import { Activity, CircleArrowUp, CircleFadingArrowUp, CircleFadingPlus, MoveRight } from "lucide-react";


export default function Home() {
  return (
    <>
      <div className="flex border border-[1px] border-neutral-200 font-inter px-[48px] flex-col h-[1344px] w-full items-center justify-center">
        <div className="border border-[1px] border-neutral-200 py-[96px] px-[20px] w-full h-full">
          <div className="mx-auto flex  text-center flex-col items-center justify-center  max-w-[390px] xs:max-w-[350px] sm:max-w-[600px] md:max-w-[808px] lg:max-w-[850px] space-y-6 md:space-y-8">


            <PillLabel
              text="B2B payment experience"
              leftIcon={CircleArrowUp}
              innerPill={{
                icon: CircleArrowUp,
                text: "Pill Label",
              }}
            />
            <p className="flex items-center justify-center ">
              <span className="display-xl-bold text-display-display-xl">EFX Framework</span>
              <span className="display-xl-medium"> - Playbook</span>
            </p>
            <p className="text-lg-regular text-text-lg text-fg-default mx-auto ">Every bits and pixel of Cxful EFX framework in detail. Learn, understand, implement with yourself or with the whole team.</p>
          </div>
          <div className="flex mt-[24px] items-center justify-center gap-4">
            <Button className="py-3xl label-lg-medium px-4xl " leftIcon={<CircleFadingPlus size={15} />}>Get Started</Button>
            <Button className="py-3xl label-lg-medium px-4xl text-fg-default bg-white border border-neutral-300 hover:bg-none  shadow-effects-5" rightIcon={<MoveRight />}>What{"'"}s EFX Design?</Button>
          </div>
          <div className="w-full mt-12 bg-[#D9D9D9] rounded-md min-h-[700px]">
          </div>
        </div>
      </div>
      <div className=" border border-[1px] border-neutral-200 w-full px-[48px] grid grid-cols-2 place-items-center justify-center ">
        <div className="py-[32px] px-[64px] border  border-[1px] border-neutral-200 w-full">
          <Card />
        </div>
        <div className="py-[32px] px-[64px] border border-[1px] border-neutral-200 w-full">
          <Card />
        </div>
        <div className="py-[32px] px-[64px] border  border-[1px] border-neutral-200 w-full">
          <Card />
        </div>
        <div className="py-[32px] px-[64px] border border-[1px] border-neutral-200 w-full">
          <Card />
        </div>

      </div>
      <div className=" px-[48px]">
        <div className="flex items-center border border-[1px] border-neutral-200  justify-center flex-col py-[96px] px-[20px]">

          <h1 className="label-md-medium text-fg-weak font-inter flex items-center justify-center gap-2"><Activity size={20} />Updates & Upcomings</h1>
          <h1 className="display-md-bold text-fg-strong font-inter mt-[12px]" >Latest and upcoming capabilities</h1>
          <div className="flex items-center justify-center mt-[48px] gap-4">
            <button className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-[1px] border-border-subtle bg-fill-highlight"><CircleFadingArrowUp size={20} />Roadmap</button>
            <button className="flex items-center justify-center gap-2 rounded-md py-[6px] px-[12px] border border-[1px] border-border-subtle "><CircleFadingArrowUp size={20} />Changelog</button>
          </div>
        </div>
      </div>
    </>
  );
}
