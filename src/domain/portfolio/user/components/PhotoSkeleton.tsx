import { section } from "framer-motion/client";
import { Loader2 } from "lucide-react";

export const PhotoSkeleton = () => {
  return (

    <section className="flex flex-col gap-20 justify-center items-center">
      
    <article className="flex justify-center flex-wrap  mx-auto gap-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <figure
          key={index}
          className="relative w-[400px] h-[300px] bg-zinc-200 border border-zinc-300 animate-pulse flex flex-col justify-center"
        >
          <span>
            <Loader2 className="animate-spin text-zinc-400 mx-auto" />
          </span>
        </figure>
      ))}
    </article>
    </section>
  );
};
