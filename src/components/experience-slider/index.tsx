"use client";

// other libraries
import useEmblaCarousel from "embla-carousel-react";
import { useGlobalContext } from "@/lib/GlobalContext";

// components
import Slide from "./Slide";
import Prev from "./buttons/Prev";
import Next from "./buttons/Next";
import Dot from "./buttons/Dot";

// types
interface ExperienceSliderProps {
  type: "e" | "p";
}

export default function ExperienceSlider({ type }: ExperienceSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    localizedContent,
    allExperiences: [listExp, listPor],
  } = useGlobalContext();
  const jobExperienceList = type === "e" ? listExp : listPor;

  return (
    <figure className="mx-auto w-full max-w-xl">
      <figcaption className="bg-clr-primary-300 mb-4 place-self-end rounded-ss-xl rounded-ee-xl p-3 italic">
        {type === "e" ? localizedContent["pageHome"]["experience"] : localizedContent["pageHome"]["portfolioProjects"]}
      </figcaption>
      <article className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-4 [grid-template-areas:'viewport_viewport''prevnext_dots']">
        <section ref={emblaRef} className="overflow-hidden [grid-area:viewport]">
          <div className="-ms-4 flex touch-pan-y touch-pinch-zoom">
            {jobExperienceList.map((singleJobExperience, jobIndex) => (
              <div key={jobIndex} className="min-w-0 shrink-0 grow-0 basis-full ps-4">
                <Slide type={type} index={jobIndex} experience={singleJobExperience} />
              </div>
            ))}
          </div>
        </section>
        <header className="flex items-center gap-4 [grid-area:prevnext]">
          <Prev emblaApi={emblaApi} />
          <Next emblaApi={emblaApi} />
        </header>
        <footer className="flex flex-wrap items-center justify-end gap-1 [grid-area:dots]">
          {emblaApi?.scrollSnapList().map((_, index) => (
            <Dot key={index} emblaApi={emblaApi} index={index} />
          ))}
        </footer>
      </article>
    </figure>
  );
}
