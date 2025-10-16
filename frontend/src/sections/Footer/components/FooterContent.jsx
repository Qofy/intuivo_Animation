import { FooterColumns } from "./FooterColumns";
import { FooterCopyright } from "./FooterCopyright";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent px-3 md:px-[22.4px]">
      <FooterColumns />
      <FooterCopyright />
    </div>
  );
};
