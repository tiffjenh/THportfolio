import Image from "next/image";
import WorkLogoRow from "@/components/WorkLogoRow";

const CONTAINER = "w-full max-w-[1040px]";

export default function Hero() {
  return (
    <section className={`${CONTAINER} pt-16 pb-24`}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
        {/* Left: illustration only */}
        <div className="w-fit mx-auto lg:mx-0 order-2 lg:order-1 flex-shrink-0">
          <div className="relative rounded-[28px] overflow-hidden border border-neutral-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/hero.png"
              alt="Illustration of Tiffany Huang and her dog sitting on a bench"
              width={380}
              height={475}
              className="block w-auto h-auto max-w-full"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority
            />
          </div>
        </div>

        {/* Right: text block, left-aligned with the picture */}
        <div className="order-1 lg:order-2 flex flex-col items-start text-left flex-shrink-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.05] tracking-[-0.02em]">
            Tiffany Huang
          </h1>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-1 leading-[1.05] tracking-[-0.02em]">
            Product Manager
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-0.5 leading-[1.05] tracking-[-0.02em]">
            San Francisco
          </p>
          <a
            href="mailto:tiffjenh@gmail.com"
            className="mt-6 text-base text-black transition-[text-decoration-color] duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-4 rounded-sm"
          >
            tiffjenh@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/tiffanyjenhuang/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Tiffany Huang’s LinkedIn profile"
            className="mt-4 inline-block rounded-lg transition-all duration-200 hover:scale-105 hover:bg-neutral-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-4"
          >
            <Image
              src="/images/linkedin.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </a>

          <WorkLogoRow embedded />
        </div>
      </div>
    </section>
  );
}
