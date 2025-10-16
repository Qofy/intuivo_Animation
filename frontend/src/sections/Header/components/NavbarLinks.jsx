export const NavbarLinks = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-between gap-y-4">
      <a
        href="/"
        className="text-[12.8px] items-start box-border caret-transparent flex flex-col justify-start leading-[19.2px] max-w-full uppercase overflow-hidden"
      >
        <div className="box-border caret-transparent">Home</div>
      </a>
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
