import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full min-h-screen")}>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div
          className={cn(
            "min-h-[50vh] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-center md:items-start",
            "px-6 pt-20 pb-8 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col items-center md:items-start">
              <div className="text-center md:text-left">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display text-lg sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "leading-none font-thin text-transparent text-slate-800",
                          "font-thin text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "mt-2 md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display text-base sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    A Full Stack Web Developer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-6 md:mt-8 flex flex-col gap-3 w-full md:w-fit">
                <Link
                  href="https://drive.google.com/file/d/1Ex5pWkknLCS871ALY8RARWnYisuQPKhZ/view?usp=sharing"
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center justify-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.instagram}
                      target="_blank"
                    >
                      <Button variant={"outline"}>
                        <SiInstagram size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
