import { ProjectGrid } from "./components/ProjectGrid";

export const ProjectsSection = () => {
  return (
    <section className="relative items-center box-border caret-transparent flex flex-col justify-start z-[2] mt-0 md:[align-items:normal] md:block md:flex-row md:justify-normal md:mt-[-500px]">
      <ProjectGrid />
    </section>
  );
};
