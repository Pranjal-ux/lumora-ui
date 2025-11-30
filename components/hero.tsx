import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
// import SparkelsText from "../components/ui/sparkles-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import WrapButton from "./ui/wrap-button";
export default function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6  font-[font1]  text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2]  tracking-tighter">
          <AnimatedShinyText>
            Customized Shadcn UI Blocks & Components
          </AnimatedShinyText>
        </h1>
        <p className="mt-6 md:text-lg font-[font2]">
          <AnimatedShinyText>
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </AnimatedShinyText>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <WrapButton className="">Get started</WrapButton>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full bg-white text-black backdrop-blur-xl shadow-2xl"
          >
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
        </div>
      </div>
      {/* <div className="w-[50vw]  mx-auto aspect-video  rounded-xl bg-[#1A1A1A] opacity-70 backdrop-blur-6xl shadow-3xl" /> */}
    </div>
  );
}
