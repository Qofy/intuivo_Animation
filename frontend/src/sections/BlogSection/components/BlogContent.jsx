import { BlogGrid } from "./BlogGrid";

export const BlogContent = () => {
  return (
    <div className="box-border caret-transparent px-3 md:px-[22.4px]">
      <div className="box-border caret-transparent py-16 md:py-32">
        <div className="box-border caret-transparent">
          <h2
            aria-label="Latest news"
            className="text-2xl box-border caret-transparent leading-[28.8px] md:text-[32px] md:leading-[38.4px]"
          >
            <div className="relative text-2xl box-border caret-transparent inline-block leading-[28.8px] md:text-[32px] md:leading-[38.4px]"></div>
            <div className="relative text-2xl box-border caret-transparent inline-block leading-[28.8px] md:text-[32px] md:leading-[38.4px]"></div>
          </h2>
        </div>
        <div className="box-border caret-transparent">
          <BlogGrid />
        </div>
      </div>
    </div>
  );
};
