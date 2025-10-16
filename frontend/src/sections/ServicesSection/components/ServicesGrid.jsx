import { ServiceCategory } from "./ServiceCategory";

export const ServicesGrid = () => {
  return (
    <div className="box-border caret-transparent flex flex-col w-full">
      <ServiceCategory
        categoryTitle="Discovery & Research"
        items={[
          {
            label: "Digital Transformation Consulting",
            lines: ["Digital Transformation Consulting"],
          },
          {
            label: "Tech Stack Recommendations",
            lines: ["Tech Stack Recommendations"],
          },
          {
            label: "Product Roadmap Strategy",
            lines: ["Product Roadmap Strategy"],
          },
        ]}
      />
      <ServiceCategory
        categoryTitle="Design"
        items={[
          { label: "UI/UX", lines: ["UI/UX"] },
          {
            label: "Component Libraries and Style Guides",
            lines: ["Component Libraries and Style", "Guides"],
          },
          {
            label: "Animations - Lottie/3D/Web",
            lines: ["Animations - Lottie/3D/Web"],
          },
          {
            label: "Design - Prompt Engineering",
            lines: ["Design - Prompt Engineering"],
          },
        ]}
      />
      <ServiceCategory
        categoryTitle="Development"
        items={[
          { label: "Web Development", lines: ["Web Development"] },
          { label: "Web Applications", lines: ["Web Applications"] },
          { label: "API-integration", lines: ["API-integration"] },
          {
            label: "Webflow Premium Partner",
            lines: ["Webflow Premium Partner"],
          },
        ]}
      />
      <ServiceCategory
        categoryTitle="Growth"
        items={[
          { label: "On-page SEO", lines: ["On-page SEO"] },
          { label: "Technical-SEO", lines: ["Technical-SEO"] },
          { label: "SEM", lines: ["SEM"] },
          {
            label: "Conversion Optimisation",
            lines: ["Conversion Optimisation"],
          },
          { label: "Product Maintenance", lines: ["Product Maintenance"] },
          { label: "AEO", lines: ["AEO"] },
        ]}
      />
    </div>
  );
};
