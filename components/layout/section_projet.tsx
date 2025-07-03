"use client";

import { ProjectCard, ProjectCardBis } from "../cards/projectCard";
import { PROJECTS } from "@/lib/data/projects";
import { motion } from "motion/react";

export default function HeroProjectSection() {
  return (
    <section className="flex flex-col items-center gap-12 px-5 lg:px-20 pb-10 h-[900px]">
      <motion.h2
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-4xl sticky top-30 lg:text-5xl"
      >
        Mes derniers <span className="font-serif">projets</span>
      </motion.h2>
      {/* <div className="relative h-[200vh] w-full"> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
        viewport={{ once: true }}
        className="sticky top-55 z-10 w-full"
      >
        <ProjectCard
          title="Outil assistant pour enseignant"
          badge1="Saas"
          badge2="En cours"
          slug="/saas"
          image="/images/saas.png"
        >
          Développement d&apos;un Saas dédié aux enseignants afin de réduire les
          tâches répétitives, accroître la productivité et revenir à
          l&apos;essentiel : l&apos;éducation.
        </ProjectCard>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        // viewport={{ once: true }}
        className="sticky top-80 z-20 w-full"
      >
        <ProjectCard
          title="Portfolio"
          badge1="UI/UX"
          badge2="Projet personnel"
          badge3="Web"
          slug="/portfolio"
          image="/images/portfolio-mockup.png"
        >
          Ce site n’est pas juste une vitrine : c’est une démonstration concrète
          de ce que je sais faire.
        </ProjectCard>
      </motion.div>
      {/* </div> */}
    </section>
  );
}

export function ProjectSection() {
  return (
    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="grid grid-cols-1 pb-40 md:grid-cols-2 gap-6 px-4 md:px-20 "
    >
      {PROJECTS.map((PROJECT) => (
        <ProjectCardBis
          key={PROJECT.slug}
          title={PROJECT.title}
          badge1={PROJECT.badge1}
          badge2={PROJECT.badge2}
          badge3={PROJECT.badge3}
          slug={PROJECT.slug}
          image={PROJECT.image}
        >
          {PROJECT.description}
        </ProjectCardBis>
      ))}
    </motion.section>
  );
}
