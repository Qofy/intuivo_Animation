import { ServicesGrid } from "./ServicesGrid";

export const ServicesContent = () => {
  return (
    <div className="box-border caret-transparent px-3 py-12 md:px-[22.4px] md:py-20">
      <div className="items-stretch box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[640px] gap-y-8 md:flex-row">
        <div className="box-border caret-transparent flex flex-col w-full">
          <h3
            aria-label="We build digital experiences that grow brands and businesses"
            className="text-2xl box-border caret-transparent leading-[28.8px] max-w-[600px] md:text-[32px] md:leading-[38.4px]"
          ></h3>
        </div>
        <ServicesGrid />
      </div>
    </div>
  );
};
