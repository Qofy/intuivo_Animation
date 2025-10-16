import { NavbarLinks } from "./NavbarLinks";
import { MobileMenuToggle } from "./MobileMenueToggle";

export const NavbarContent = () => {
  return (
    <div className="box-border caret-transparent px-3 md:px-[22.4px]">
      <div className="items-center box-border caret-transparent flex h-16 justify-between mx-auto pt-[22.4px] pb-[19.2px]">
        <NavbarLinks />
        <div className="absolute items-center box-border caret-transparent flex justify-center z-[-1] inset-[0%]"></div>
        <MobileMenuToggle />
      </div>
    </div>
  );
};
