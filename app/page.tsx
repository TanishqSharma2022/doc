import { Button } from "@/components/ui/Button";
import { PillLabel } from "@/components/ui/Pill-Label";
import { CircleArrowUp, CircleFadingPlus, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <div className="mx-auto flex text-center flex-col items-center justify-center  max-w-[390px] xs:max-w-[350px] sm:max-w-[600px] md:max-w-[808px] lg:max-w-[850px] space-y-6 md:space-y-8">

        
        <PillLabel
          text="B2B payment experience"
          leftIcon={CircleArrowUp}
          innerPill={{
            icon: CircleArrowUp,
            text: "Pill Label",
          }}
          />
        <p className="flex items-center justify-center ">
          <h1 className="display-xl-bold text-display-display-xl">EFX Framework</h1>
          <h1 className="display-xl-medium">-Playbook</h1>
        </p>
        <p className="text-lg-regular text-text-lg text-fg-default mx-auto ">Every bits and pixel of Cxful EFX framework in detail. Learn, understand, implement with yourself or with the whole team.</p>
          </div>
          <div className="flex mt-6 items-center justify-center gap-4">
            <Button className="py-3xl label-lg-medium px-4xl" leftIcon={<CircleFadingPlus size={15} />}>Get Started</Button>
            <Button className="py-3xl label-lg-medium px-4xl text-fg-default " variant={'secondary'} rightIcon={<MoveRight />}>What's EFX Design?</Button>
          
          </div>
      </div>
    </>
  );
}
