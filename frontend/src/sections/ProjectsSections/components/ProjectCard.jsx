// export type ProjectCardProps = {
//   href: string;
//   variant: string;
//   backgroundImageUrl: string;
//   backgroundImageSizes: string;
//   backgroundImageAlt: string;
//   foregroundImageUrl: string;
//   foregroundImageSizes: string;
//   foregroundImageAlt: string;
//   title: string;
//   description: string;
// };

export const ProjectCard = (props) => {
  return (
    <a
      href={props.href}
      className={`relative items-center box-border caret-transparent flex flex-col h-[500px] justify-end max-w-full min-h-[auto] min-w-[auto] w-auto overflow-hidden md:absolute md:[align-items:normal] md:aspect-auto md:h-auto md:justify-between md:min-h-0 md:min-w-0 md:w-[960px] ${props.variant}`}
    >
      <img
        sizes={props.backgroundImageSizes}
        alt={props.backgroundImageAlt}
        src={props.backgroundImageUrl}
        className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:block md:min-h-[auto] md:min-w-[auto]"
      />
      <div className="items-center box-border caret-transparent flex flex-col h-full justify-center overflow-hidden rounded-lg md:[align-items:normal] md:block md:flex-row md:h-auto md:justify-normal md:overflow-visible md:rounded-none">
        <img
          sizes={props.foregroundImageSizes}
          alt={props.foregroundImageAlt}
          src={props.foregroundImageUrl}
          className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-bl rounded-br rounded-tl rounded-tr md:hidden md:min-h-0 md:min-w-0"
        />
      </div>
      <div className="text-[12.8px] items-start box-border caret-transparent gap-x-[3.2px] flex flex-col justify-between leading-[19.2px] gap-y-[3.2px] w-full mt-2 md:text-base md:items-center md:gap-x-4 md:flex-row md:leading-6 md:gap-y-4 md:w-auto">
        <div className="text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
          {props.title}
        </div>
        <div className="text-neutral-400 text-[12.8px] box-border caret-transparent leading-[19.2px] md:text-base md:leading-6">
          {props.description}
        </div>
      </div>
    </a>
  );
};
