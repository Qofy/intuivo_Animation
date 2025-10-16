export const FooterMenu = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-center order-2 gap-y-8 w-full md:[align-items:normal] md:justify-normal md:order-none">
      <div className="items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-start gap-y-[3.2px]">
        <div className="text-[12.8px] items-start box-border caret-transparent flex flex-col justify-start leading-[19.2px] uppercase overflow-hidden mb-4">
          <div className="box-border caret-transparent">Menu</div>
        </div>
        <a
          href="/work"
          className="text-[12.8px] items-start box-border caret-transparent flex flex-col h-[19px] justify-start leading-[19.2px] max-w-full opacity-50 overflow-hidden"
        >
          <div className="box-border caret-transparent">Work</div>
          <div className="box-border caret-transparent">Work</div>
        </a>
        <a
          href="/studio"
          className="text-[12.8px] items-start box-border caret-transparent flex flex-col h-[19px] justify-start leading-[19.2px] max-w-full opacity-50 overflow-hidden"
        >
          <div className="box-border caret-transparent">Studio</div>
          <div className="box-border caret-transparent">Studio</div>
        </a>
        <a
          href="/webflow"
          className="text-[12.8px] items-start box-border caret-transparent flex flex-col h-[19px] justify-start leading-[19.2px] max-w-full opacity-50 overflow-hidden"
        >
          <div className="box-border caret-transparent">Webflow</div>
          <div className="box-border caret-transparent">Webflow</div>
        </a>
        <a
          href="/contact"
          className="text-[12.8px] items-start box-border caret-transparent flex flex-col h-[19px] justify-start leading-[19.2px] max-w-full opacity-50 overflow-hidden"
        >
          <div className="box-border caret-transparent">Contact</div>
          <div className="box-border caret-transparent">Contact</div>
        </a>
      </div>
      <div className="items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-start gap-y-[3.2px]">
        <a
          href="https://www.instagram.com/added.digital?igsh=bWp1NGZlNm15bzRq"
          className="text-[12.8px] items-start box-border caret-transparent flex flex-col h-[19px] justify-start leading-[19.2px] max-w-full opacity-50 overflow-hidden"
        >
          <div className="box-border caret-transparent">Instagram</div>
          <div className="box-border caret-transparent">Instagram</div>
        </a>
        <a
          href="https://www.linkedin.com/company/added-digital/"
          className="text-[12.8px] items-start box-border caret-transparent flex flex-col h-[19px] justify-start leading-[19.2px] max-w-full opacity-50 overflow-hidden"
        >
          <div className="box-border caret-transparent">LInkedin</div>
          <div className="box-border caret-transparent">LInkedin</div>
        </a>
      </div>
      <a
        href="https://webflow.com/@added"
        className="box-border caret-transparent block max-w-full underline"
      >
        <div className="box-border caret-transparent h-[27.2px] ml-[-6.4px] mb-[2.4px] before:accent-auto before:caret-transparent before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-nhaasgrotesktxpro after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-nhaasgrotesktxpro">
          <img
            src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-full"
          />
        </div>
      </a>
    </div>
  );
};
