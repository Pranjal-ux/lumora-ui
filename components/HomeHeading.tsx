import React from "react";
// import TextType from "./TextType";
import TextPressure from "./ui/TextPressure";
const HomeHeading = () => {
  return (
    <div
      className=" absolute
  inset-x-0
 lg: -top-60
  mx-auto
  w-[45%]
max-w-[50vw]
  flex
  justify-center
  font-bold
  tracking-tight"
    >
      <TextPressure
        text="Klarden"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#E5E4E2"
        strokeColor="#E5E4E2"
        minFontSize={170}
      />
      {/* #E5E4E2 */}

      {/* <TextType
        text={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      /> */}
    </div>
  );
};

export default HomeHeading;
