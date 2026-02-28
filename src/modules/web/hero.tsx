import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRightIcon, LucideRocket, LucideTrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen max-h-[195vh] w-full  bg-black relative overflow-hidden">
      <div className="">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#C1C1C1"
        />
      </div>
      <Image
        src="/night-bg.png"
        alt="background"
        className="size-full block  opacity-70 "
        width="3276"
        height="4095"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/75" />

      <main className="absolute inset-0 flex flex-col items-center justify-center md:-mt-8">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 border border-gray-400/30 rounded-full  cursor-pointer font-inter tracking-wide transition-colors duration-200 mb-20">
          <span>✨</span>
          <Separator orientation="vertical" className="mx-2 bg-gray-600" />
          <span className="text-gray-200">Better way to collaborate</span>
        </AnimatedShinyText>

        <div className="flex flex-col gap-2 items-center justify-center font-pop">
          <h1 className="text-8xl leading-[1.20] bg-linear-to-b from-white via-white to-neutral-800 bg-clip-text text-transparent font-semibold ">
            Build <span className="">Together</span>
          </h1>
          <div className="flex items-center gap-4 -mt-4">
            <h1 className="text-8xl leading-[1.15] bg-linear-to-b from-white via-white to-neutral-800 bg-clip-text text-transparent font-semibold ">
              Ship Faster
            </h1>
            <div className="self-center -mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-blue-300 to-blue-700">
              <LucideTrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <div className="w-220  mx-auto relative mt-5">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />

          <p className="text-gray-400 text-[20px] mt-5 font-sans tracking-tight text-pretty text-center">
            Autonomous agents that plan, manage, and ship projects. Match
            talent, Contribute Open-source, and execute workflows autonomously.
            Build together — frictionless.
          </p>

          <div className="flex items-center justify-center gap-8 mt-10">
            <Link href="/auth">
              <Button className="bg-linear-to-b from-white to-slate-200  text-sm font-medium text-black hover:from-white hover:to-white hover:scale-105 duration-200 cursor-pointer">
                Start Building <LucideRocket className="ml-2 size-5" />
              </Button>
            </Link>

            <Button
            size='sm'
             className="text-white text-xs font-inter" variant="ghost">
              Request Demo <ArrowRightIcon className="ml-2 size-5" />
            </Button>
          </div>
        </div>

        <div className="mt-20 w-full max-w-[80%] mx-auto">
          <div className="-skew-x-6 border hover:scale-110 cursor-grab hover:skew-0 transition-all duration-500 ease-in-out border-black/50 rounded-2xl overflow-hidden">
            <Image
              src="/hero-img-1.png"
              alt="background"
              className="size-full block "
              width="1000"
              height="1000"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;