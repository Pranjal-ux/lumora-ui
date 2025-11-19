import React from "react";
// import TextType from "./TextType";
import TextPressure from "./TextPressure";
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
        text="Klarden-Ai"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#A3FFE3"
        strokeColor="#ff0000"
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
