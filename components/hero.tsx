import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
// import ShimmerButton from "./ui/shimmer-button";
import RainbowButton from "./ui/rainbow-button";
import ScrambledText from "./ScrambledText";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full flex flex-col gap-16 items-center justify-center px-6 py-14 lg:mt-10">
      <div className="text-center leading-relaxed max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>

        <h1 className="my-3 py-2 text-slate-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Customized Shadcn UI Blocks & Components
        </h1>

        <p className=" leading-snug md:text-lg ... text-balance line-clamp-2">
          <ScrambledText className="mt-10">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </ScrambledText>
        </p>

        <div className="mt-12 flex items-center justify-center gap-5">
          <RainbowButton className="w-32 font-bold text-[#B300FF]">
            Get started
          </RainbowButton>
          <RainbowButton className="w-32 font-bold text-[#B3E5FC]">
            Watch demo
          </RainbowButton>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto aspect-video lg:mt-11  ">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="relative w-full h-full rounded-2xl object-cover border border-gray-600 bg-transparent backdrop-blur-lg shadow-4xl"
        />
      </div>
    </div>
  );
}
