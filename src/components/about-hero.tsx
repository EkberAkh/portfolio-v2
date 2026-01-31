import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20">
      <div className="w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl">
              Hi, I&apos;m Akbar Akhundov
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mx-auto mt-8 max-w-3xl text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-xl">
              Frontend Engineer with a passion for building scalable web
              applications. I specialize in React and Next.js ecosystems,
              delivering award-winning government-scale projects and leading
              development teams to success.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mx-auto mt-8 max-w-3xl text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-xl">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in React, Next.js, TypeScript, and modern
              frontend architecture.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Azerbaijan flag"
                src="https://flagcdn.com/az.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Baku, Azerbaijan
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
