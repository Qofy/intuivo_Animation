import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent px-3 md:px-[22.4px]">
      <div className="relative content-start items-start box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-auto justify-start justify-items-start gap-y-4 w-full z-[1] pt-[102.4px] md:items-center md:gap-x-[normal] md:flex-row md:h-[1000px] md:justify-center md:gap-y-[normal] md:pt-0">
        <div className="relative items-center box-border caret-transparent hidden h-[600px] justify-center max-h-none max-w-none w-[351px] z-[-1] overflow-hidden my-4 rounded-xl md:absolute md:h-[512px] md:max-h-[700px] md:max-w-[700px] md:w-[512px] md:overflow-visible md:my-0 md:rounded-none">
          <img
            src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9ef_Frame_2085653009.webp"
            sizes="100vw"
            alt=""
            className="absolute box-border caret-transparent h-full max-w-full object-cover rounded-2xl"
          />
          <img
            src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9ec_Frame_2085653009.webp"
            sizes="100vw"
            alt=""
            className="absolute box-border caret-transparent h-full max-w-full object-cover rounded-2xl"
          />
          <img
            src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9b9_h.png"
            sizes="100vw"
            alt=""
            className="absolute box-border caret-transparent h-full max-w-full object-cover rounded-2xl"
          />
          <img
            src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9a6_dda.png"
            sizes="100vw"
            alt=""
            className="absolute box-border caret-transparent h-full max-w-full object-cover rounded-2xl"
          />
          <div className="absolute box-border caret-transparent gap-x-0 hidden auto-cols-[1fr] grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] h-auto gap-y-0 w-[101%] z-[5] overflow-hidden left-0 right-[0%] inset-y-[0%] md:h-[101%]">
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
            <div className="bg-neutral-950 box-border caret-transparent"></div>
          </div>
        </div>
        <HeroTitle />
        <HeroDescription />
      </div>
    </div>
  );
};
