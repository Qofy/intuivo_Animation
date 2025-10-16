import { HeroContent } from "./HeroContent";

export const HeroSection = () => {
  return (
    <div className="box-border caret-transparent h-auto md:h-[4000px]">
      <div className="static items-stretch box-border caret-transparent flex flex-col h-auto justify-start opacity-0 top-[0%] md:sticky md:h-[1000px] md:justify-center md:opacity-100">
        <HeroContent />
      </div>
      <section className="relative items-center box-border caret-transparent flex flex-col justify-start z-[2] mt-0 md:[align-items:normal] md:block md:flex-row md:justify-normal md:mt-[-500px]">
        <div className="relative box-border caret-transparent gap-x-12 auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-auto min-h-[auto] min-w-[auto] gap-y-12 w-full md:gap-x-[normal] md:grid-cols-[1fr_1fr] md:h-[3500px] md:min-h-0 md:min-w-0 md:gap-y-[normal] md:w-auto">
          <div className="relative content-center items-start box-border caret-transparent flex auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-auto justify-center justify-items-stretch px-[11.2px] top-0 md:sticky md:items-center md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto] md:h-[1000px] md:px-0">
            <div className="relative items-center box-border caret-transparent gap-x-3 flex flex-col justify-end gap-y-3 w-full mt-12 pb-20 md:gap-x-[normal] md:justify-center md:gap-y-[normal] md:mt-0 md:pb-0">
              <a
                href="/work/mentor"
                className="relative items-center aspect-[3_/_2] box-border caret-transparent flex flex-col h-[500px] justify-end max-w-full min-h-[auto] min-w-[auto] translate-y-[171.169px] w-auto z-[1] overflow-hidden md:absolute md:[align-items:normal] md:aspect-auto md:h-auto md:justify-between md:min-h-0 md:min-w-0 md:translate-y-[1200px] md:w-[960px]"
              >
                <img
                  sizes="(max-width: 1930px) 100vw, 1930px"
                  alt=""
                  src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9cd_aaa.webp"
                  className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="items-center box-border caret-transparent flex flex-col h-full justify-center overflow-hidden rounded-lg md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:overflow-visible md:rounded-none">
                  <img
                    sizes="(max-width: 989px) 100vw, 989px"
                    alt=""
                    src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9ce_da.webp"
                    className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
                  />
                </div>
                <div className="text-[12.8px] items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-between leading-[19.2px] gap-y-[3.2px] w-full mt-2 md:text-base md:items-center md:gap-x-4 md:flex-row md:leading-6 md:gap-y-4 md:w-auto">
                  <div className="text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Mentor Sverige
                  </div>
                  <div className="text-neutral-400 text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Website - Development
                  </div>
                </div>
              </a>
              <a
                href="/work/kltk"
                className="relative items-center aspect-[3_/_2] box-border caret-transparent flex flex-col h-[500px] justify-end max-w-full min-h-[auto] min-w-[auto] translate-y-[1200px] w-auto z-[2] overflow-hidden md:absolute md:[align-items:normal] md:aspect-auto md:h-auto md:justify-between md:min-h-0 md:min-w-0 md:w-[960px]"
              >
                <img
                  sizes="(max-width: 1930px) 100vw, 1930px"
                  alt=""
                  src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f926_KLTK.avif"
                  className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="items-center box-border caret-transparent flex flex-col h-full justify-center overflow-hidden rounded-lg md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:overflow-visible md:rounded-none">
                  <img
                    sizes="(max-width: 999px) 100vw, 999px"
                    alt=""
                    src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9d0_KLTK.webp"
                    className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
                  />
                </div>
                <div className="text-[12.8px] items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-between leading-[19.2px] gap-y-[3.2px] w-full mt-2 md:text-base md:items-center md:gap-x-4 md:flex-row md:leading-6 md:gap-y-4 md:w-auto">
                  <div className="text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Kungliga Tennis Klubben
                  </div>
                  <div className="text-neutral-400 text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    System - Design + Development + Support
                  </div>
                </div>
              </a>
              <a
                href="/work/sylvera"
                className="relative items-center aspect-[3_/_2] box-border caret-transparent flex flex-col h-[500px] justify-end max-w-full min-h-[auto] min-w-[auto] translate-y-[1200px] w-auto z-[3] overflow-hidden md:absolute md:[align-items:normal] md:aspect-auto md:h-auto md:justify-between md:min-h-0 md:min-w-0 md:w-[960px]"
              >
                <img
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  alt=""
                  src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f934_Sylvera.avif"
                  className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="items-center box-border caret-transparent flex flex-col h-full justify-center overflow-hidden rounded-lg md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:overflow-visible md:rounded-none">
                  <img
                    sizes="(max-width: 989px) 100vw, 989px"
                    alt=""
                    src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9d1_Frame_2085653110.webp"
                    className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
                  />
                </div>
                <div className="text-[12.8px] items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-between leading-[19.2px] gap-y-[3.2px] w-full mt-2 md:text-base md:items-center md:gap-x-4 md:flex-row md:leading-6 md:gap-y-4 md:w-auto">
                  <div className="text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Sylvera
                  </div>
                  <div className="text-neutral-400 text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Website - Strategy +  Design + Development + Support
                  </div>
                </div>
              </a>
              <a
                href="/work/dhl"
                className="relative items-center aspect-[3_/_2] box-border caret-transparent flex flex-col h-[500px] justify-end max-w-full min-h-[auto] min-w-[auto] translate-y-[1200px] w-auto z-[4] overflow-hidden md:absolute md:[align-items:normal] md:aspect-auto md:h-auto md:justify-between md:min-h-0 md:min-w-0 md:w-[960px]"
              >
                <img
                  sizes="(max-width: 1934px) 100vw, 1934px"
                  alt=""
                  src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9dd_aw.png"
                  className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="items-center box-border caret-transparent flex flex-col h-full justify-center overflow-hidden rounded-lg md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:overflow-visible md:rounded-none">
                  <img
                    sizes="(max-width: 989px) 100vw, 989px"
                    alt=""
                    src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f9d2_Frame_2085653109.webp"
                    className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
                  />
                </div>
                <div className="text-[12.8px] items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-between leading-[19.2px] gap-y-[3.2px] w-full mt-2 md:text-base md:items-center md:gap-x-4 md:flex-row md:leading-6 md:gap-y-4 md:w-auto">
                  <div className="text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    DHL
                  </div>
                  <div className="text-neutral-400 text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Website - Development
                  </div>
                </div>
              </a>
              <a
                href="/work/greenly"
                className="relative items-center aspect-square box-border caret-transparent flex flex-col h-[500px] justify-end max-w-full min-h-[auto] min-w-[auto] translate-y-[1200px] w-auto z-[5] overflow-hidden md:absolute md:[align-items:normal] md:aspect-auto md:h-auto md:justify-between md:min-h-0 md:min-w-0 md:w-[960px]"
              >
                <img
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  alt=""
                  src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f8cd_Frame_2085652260.avif"
                  className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="items-center box-border caret-transparent flex flex-col h-full justify-center overflow-hidden rounded-lg md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:overflow-visible md:rounded-none">
                  <img
                    sizes="(max-width: 989px) 100vw, 989px"
                    alt=""
                    src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0fa15_awd.png"
                    className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
                  />
                </div>
                <div className="text-[12.8px] items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-between leading-[19.2px] gap-y-[3.2px] w-full mt-2 md:text-base md:items-center md:gap-x-4 md:flex-row md:leading-6 md:gap-y-4 md:w-auto">
                  <div className="text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Greenly
                  </div>
                  <div className="text-neutral-400 text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
                    Website - Development + Design + Growth
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
