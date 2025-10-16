import { NavbarContent } from "./NavbarContent";

export const Navbar = () => {
  return (
    <div className="fixed bg-neutral-950 box-border caret-transparent translate-y-[-0.5%] z-10 top-[0%] inset-x-[0%] md:transform-none">
      <div className="absolute bg-white/10 box-border caret-transparent h-px w-full bottom-[0%] inset-x-[0%]"></div>
      <NavbarContent />
    </div>
  );
};
