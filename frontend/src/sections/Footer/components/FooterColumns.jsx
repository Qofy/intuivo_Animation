import { FooterMenu } from "./FooterMenu";
import { FooterContact } from "./FooterContact";
import { FooterLogo } from "./FooterLogo";

export const FooterColumns = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-y-8 md:flex md:auto-cols-auto md:grid-cols-none md:grid-rows-none">
      <FooterMenu />
      <FooterContact />
      <FooterLogo />
    </div>
  );
};
