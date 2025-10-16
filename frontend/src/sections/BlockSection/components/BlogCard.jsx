export const BlogCard = () => {
  return (
    <div
      role="listitem"
      className="box-border caret-transparent gap-x-3 flex flex-col gap-y-3 w-full"
    >
      <a
        href="/blog/webflow-vs-wordpress-which-should-you-choose"
        className="relative aspect-square box-border caret-transparent block max-w-full underline overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr"
      >
        <img
          src="https://c.animaapp.com/mgrmwkbjEVesmp/assets/68e76aedc11a659a28d0f854_Frame_2085653080.png"
          alt=""
          sizes="100vw"
          className="aspect-square box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </a>
      <div className="box-border caret-transparent flex flex-col justify-between">
        <p className="box-border caret-transparent">
          Webflow vs WordPress: which should you choose?
        </p>
        <p className="text-neutral-400 box-border caret-transparent">
          August 14, 2025
        </p>
      </div>
    </div>
  );
};
