import React from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

import { cn } from "@/lib/utils";

interface WrapButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const WrapButton: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <Link href={href}>
          <div
            className={cn(
              "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2 flex items-center p-[11px] rounded-full",
              className
            )}
          >
            <div className="border border-[#3B3A3A] bg-[#ff3f17] h-[23px] rounded-full flex items-center justify-center text-white px-3">
              <p className="font-medium tracking-tight flex items-center gap-2">
                {children}
              </p>
            </div>

            <div className="text-[#3b3a3a] group-hover:ml-2 transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
              <ArrowRight
                size={12}
                className="group-hover:rotate-45 transition-all"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2 h-12 flex items-center px-2 py-1 rounded-full",
            className
          )}
        >
          <div className="border border-[#3B3A3A] bg-red-600 h-[39px] px-3 rounded-full flex items-center justify-center text-black">
            <Globe className="mx-1 animate-spin text-black" size={20} />

            <p className="font-medium tracking-tight text-sm">
              {children ? children : "Get Started"}
            </p>
          </div>

          <div className="text-[#3b3a3a] group-hover:ml-1 transition-all size-5 flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
            <ArrowRight
              size={16}
              className="group-hover:rotate-45 transition-all"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WrapButton;
