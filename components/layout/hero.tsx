"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
// import { Ticker } from "../ui/ticker";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <AuroraBackground className="">
      <section className="flex flex-col h-[100vh] z-1 w-full items-center  justify-center px-8 gap-4">
        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <Badge variant="custom3">Développeur Full Stack</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="text-6xl text-center w-full md:text-7xl lg:text-8xl "
        >
          Du <span className="font-serif">pixel</span> à la
          <br />
          base de données
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="text-secondary text-center"
        >
          Je conçois et développe des solutions web de A à Z.
        </motion.p>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="py-5 flex justify-center"
        >
          <Button size="default" asChild>
            <Link href="/projets">Voir mes projets</Link>
          </Button>
        </motion.div>
        {/* <Ticker primary="bg-primary" secondary="bg-primary/50">
          Open to work
        </Ticker> */}
      </section>
    </AuroraBackground>
  );
}

export function ProjectsHero() {
  return (
    <section className="flex flex-col items-center  justify-center pt-40 px-4 md:px-8 gap-4 pb-24 md:pt-48">
      <motion.div
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <Badge variant="custom">Projets</Badge>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.3,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-6xl text-center md:text-7xl md:w-[80%] lg:w-[50%] "
      >
        Faire c&apos;est bien, <span className="font-serif">montrer</span>{" "}
        c&apos;est mieux
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-secondary text-center"
      >
        Découvrez les différents projet que j’ai réalisé
      </motion.p>
    </section>
  );
}

export function SingleProjectHero({ title }: { title: string }) {
  return (
    <section className="flex flex-col items-center  justify-center pt-40 px-4 md:px-8 gap-4 pb-24 md:pt-48">
      <motion.div
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <Badge variant="custom">Projet</Badge>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.3,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl text-center"
      >
        {title}
      </motion.h1>
    </section>
  );
}

export function AboutHero() {
  return (
    <section className="flex flex-col items-center  justify-center pt-40 px-4 md:px-8 gap-4 pb-24 md:pt-48">
      <motion.div
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <Badge variant="custom">À propos</Badge>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0.0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.3,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl text-center"
      >
        Qui <span className="font-serif">suis-je ?</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-secondary text-justify md:text-center lg:w-[60%]"
      >
        Moi c&apos;est <span className="text-primary">Panegna</span>, j’ai 24
        ans et je suis tout fraîchement diplômé d&apos;un Bachelor Développement
        web ainsi que du Titre de Concepteur et Développeur d&apos;application.
        Je me suis lancé dans le développement web en Freelance !
      </motion.p>
    </section>
  );
}

export function ContactHero({ className }: { className: string }) {
  return (
    <section
      className={`flex flex-col items-center justify-center  px-6 gap-4 ${className}`}
    >
      <Badge variant="custom">Contact</Badge>
      <h1 className="text-7xl text-center w-[80%]">
        Laissez moi un <span className="font-serif">message </span>
      </h1>
    </section>
  );
}

<p className=" text-secondary text-2xl">
  Salut moi c&apos;est <span className="text-primary">Panegna</span>, j’ai 24
  ans et je suis tout fraichement diplomé d&apos;un Bachelor Développement web
  ainsi que du Titre de Concepteur et Développeur d&apos;application. Je me suis
  lancé dans le{" "}
  <Badge variant="custom2" className="text-lg">
    développement web
  </Badge>{" "}
  en Freelance !
</p>;
