import { BlogCard } from "./BlogCard";

export const BlogGrid = () => {
  return (
    <div
      role="list"
      className="box-border caret-transparent gap-x-8 grid flex-wrap auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-8 mt-8 md:grid-cols-[1fr_1fr_1fr]"
    >
      <BlogCard />
    </div>
  );
};
