"use client";

import { TextReveal } from "../magicui/text-reveal";
import { SparklesText } from "../magicui/sparkles-text";

export default function DescriptionSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <TextReveal>
        Ah oui, au fait ! Moi c’est
        <span className="">Panegna</span>
        <span className="font-serif">[pania]. </span>Développeur Full Stack basé
        en Vendée. En gros je transforme vos idées en
        <SparklesText
          colors={{ first: "yellow", second: "orange" }}
          sparklesCount={4}
          className="text-3xl lg:text-4xl xl:text-5xl text-white  font-light"
        >
          applications web.
        </SparklesText>
      </TextReveal>
    </div>
  );
}
