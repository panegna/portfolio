"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string | ReactNode[];
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // if (typeof children !== "string") {
  //   throw new Error("TextReveal: children must be a string");
  // }

  // const words = children.split(" ");
  const words: ReactNode[] = [];

  if (typeof children === "string") {
    // Case: plain string => split into words
    words.push(
      ...children.split(" ").map((word, i) => <span key={i}>{word}</span>)
    );
  } else if (Array.isArray(children)) {
    // Case: ReactNode[] => go through each child
    children.forEach((child, i) => {
      if (typeof child === "string") {
        // Split string segments
        words.push(
          ...child
            .split(" ")
            .map((word, j) => <span key={`${i}-${j}`}>{word}</span>)
        );
      } else {
        // Keep element as is
        words.push(child);
      }
    });
  }

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[40%] max-w-7xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span
          ref={targetRef}
          className={
            "flex flex-wrap justify-center font-light text-3xl  md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={" text-secondary"}>
        {children}
      </motion.span>
    </span>
  );
};
