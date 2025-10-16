
export const ServiceCategory = (props) => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-8 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-start gap-y-8 py-8">
      <div className="absolute bg-white/10 box-border caret-transparent h-px w-full top-[0%] inset-x-[0%]"></div>
      <div className="items-start box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-stretch gap-y-8 w-full md:grid-cols-[1fr_1fr]">
        <div
          className={`items-stretch box-border caret-transparent flex h-16 justify-start overflow-hidden ${props.items.length <= 4 ? "self-start" : ""}`}
        >
          <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-0 translate-y-[100.0%]">
            <div className="text-[80px] box-border caret-transparent leading-[64px]">
              0
            </div>
          </div>
          <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-0 translate-y-[100.0%]">
            <div className="text-[80px] box-border caret-transparent leading-[64px]">
              1
            </div>
            {props.items.length > 4 && (
              <div className="text-[80px] box-border caret-transparent leading-[64px]">
                2
              </div>
            )}
            {props.items.length > 5 && (
              <div className="text-[80px] box-border caret-transparent leading-[64px]">
                3
              </div>
            )}
            {props.items.length > 6 && (
              <div className="text-[80px] box-border caret-transparent leading-[64px]">
                4
              </div>
            )}
          </div>
        </div>
        <div className="box-border caret-transparent">
          <div
            aria-label={props.categoryTitle}
            className="box-border caret-transparent mb-4"
          >
            <div className="static box-content caret-black my-0 py-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:mb-[-1.6px] md:mt-[-1.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-clip md:[mask-position:0%] md:bg-left-top md:py-[1.6px] md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                {props.categoryTitle}
              </div>
            </div>
          </div>
          {props.items.map((item, index) => (
            <div
              key={index}
              aria-label={item.label}
              className="text-neutral-400 box-border caret-transparent"
            >
              {item.lines.map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  className="static box-content caret-black my-0 py-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:mb-[-1.6px] md:mt-[-1.6px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-clip md:[mask-position:0%] md:bg-left-top md:py-[1.6px] md:scroll-m-0 md:scroll-p-[auto]"
                >
                  <div className="static box-content caret-black opacity-100 transform-none md:relative md:aspect-auto md:box-border md:caret-transparent md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[100px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    {line}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
