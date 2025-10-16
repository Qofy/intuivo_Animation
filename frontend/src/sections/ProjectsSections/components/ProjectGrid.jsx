import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-12 auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-auto min-h-[auto] min-w-[auto] gap-y-12 w-full md:gap-x-[normal] md:grid-cols-[1fr_1fr] md:h-[3500px] md:min-h-0 md:min-w-0 md:gap-y-[normal] md:w-auto">
      <div className="relative content-center items-start box-border caret-transparent flex auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-auto justify-center justify-items-stretch px-[11.2px] top-0 md:sticky md:items-center md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto] md:h-[1000px] md:px-0">
        <div className="relative items-center box-border caret-transparent gap-x-3 flex flex-col justify-end gap-y-3 w-full mt-12 pb-20 md:gap-x-[normal] md:justify-center md:gap-y-[normal] md:mt-0 md:pb-0">
          <ProjectCard
            href="/work/mentor"
            variant="aspect-[3_/_2] translate-y-[171.169px] z-[1] md:translate-y-[1200px]"
            backgroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9cd_aaa.webp"
            backgroundImageSizes="(max-width: 1930px) 100vw, 1930px"
            backgroundImageAlt=""
            foregroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9ce_da.webp"
            foregroundImageSizes="(max-width: 989px) 100vw, 989px"
            foregroundImageAlt=""
            title="Mentor Sverige"
            description="Website - Development"
          />
          <ProjectCard
            href="/work/kltk"
            variant="aspect-[3_/_2] translate-y-[1200px] z-[2]"
            backgroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f926_KLTK.avif"
            backgroundImageSizes="(max-width: 1930px) 100vw, 1930px"
            backgroundImageAlt=""
            foregroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9d0_KLTK.webp"
            foregroundImageSizes="(max-width: 999px) 100vw, 999px"
            foregroundImageAlt=""
            title="Kungliga Tennis Klubben"
            description="System - Design + Development + Support"
          />
          <ProjectCard
            href="/work/sylvera"
            variant="aspect-[3_/_2] translate-y-[1200px] z-[3]"
            backgroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f934_Sylvera.avif"
            backgroundImageSizes="(max-width: 1920px) 100vw, 1920px"
            backgroundImageAlt=""
            foregroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9d1_Frame_2085653110.webp"
            foregroundImageSizes="(max-width: 989px) 100vw, 989px"
            foregroundImageAlt=""
            title="Sylvera"
            description="Website - Strategy +  Design + Development + Support"
          />
          <ProjectCard
            href="/work/dhl"
            variant="aspect-[3_/_2] translate-y-[1200px] z-[4]"
            backgroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9dd_aw.png"
            backgroundImageSizes="(max-width: 1934px) 100vw, 1934px"
            backgroundImageAlt=""
            foregroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9d2_Frame_2085653109.webp"
            foregroundImageSizes="(max-width: 989px) 100vw, 989px"
            foregroundImageAlt=""
            title="DHL"
            description="Website - Development"
          />
          <ProjectCard
            href="/work/greenly"
            variant="aspect-square translate-y-[1200px] z-[5]"
            backgroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f8cd_Frame_2085652260.avif"
            backgroundImageSizes="(max-width: 1920px) 100vw, 1920px"
            backgroundImageAlt=""
            foregroundImageUrl="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0fa15_awd.png"
            foregroundImageSizes="(max-width: 989px) 100vw, 989px"
            foregroundImageAlt=""
            title="Greenly"
            description="Website - Development + Design + Growth"
          />
        </div>
      </div>
    </div>
  );
};
