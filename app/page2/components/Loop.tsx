import React from "react";
import LogoLoop from "../../../components/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Loop = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },

    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },

    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },

    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  // Alternative with image sources

  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },

    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },

    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];
  return (
    <div className="mb-5">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
        className="text-white"
      />
    </div>
  );
};

export default Loop;
