"use client";

import { AboutHero } from "@/components/layout/hero";
import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <AboutHero />
      <div className="flex flex-col lg:flex-row  px-5 md:px-20 gap-10 pb-50">
        <motion.div
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.6,
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex flex-1/4 flex-col lg:flex-col md:flex-row md:justify-center  md:gap-5 lg:gap-0 items-center lg:justify-start lg:items-end"
        >
          <Image
            className=""
            src="/images/moi.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="flex flex-col items-center md:items-start lg:items-end">
            <h3 className="mt-5 md:mt-0 lg:mt-5 font-bold text-center md:text-start lg:text-end text-lg">
              Panegna
              <br />
              Sydaphasavanh
            </h3>
            <h4 className="font-light  text-secondary">
              Développeur FullStack
            </h4>
            <ShinyButton className="bg-white mt-2 border-[#FFFFFF]/8 rounded-full  px-3 py-2">
              <Link href="/contact">Disponible pour collaborer</Link>
            </ShinyButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.6,
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex-3/4 flex flex-col gap-6"
        >
          <h2 className="text-4xl ">Expériences</h2>
          <div className="flex flex-col  gap-4">
            <div>
              <p className="text-secondary text-md">2025 | Maintenant</p>
              <div>
                <h3 className="text-xl">
                  Développeur FullStack{" "}
                  <span className="text-secondary">‧ Freelance</span>
                </h3>
                <p>
                  Développement complet de solutions web, alliant front-end
                  soigné et back-end performant.
                </p>
              </div>
            </div>
            <hr className="border-[#FFFFFF]/8 border-0.5 w-full" />
            <div>
              <p className="text-secondary text-md">2023 - 2024</p>
              <div>
                <h3 className="text-xl">
                  Développeur Front-end{" "}
                  <span className="text-secondary">‧ Agence Avanti</span>
                </h3>
                <p>
                  Création de maquettes et développement front-end adaptés aux
                  besoins de chaque projet.
                </p>
              </div>
            </div>
            <hr className="border-[#FFFFFF]/8 border-0.5 w-full" />
            <div>
              <p className="text-secondary text-md">2023 | 3 mois</p>
              <div>
                <h3 className="text-xl">
                  Intégrateur web{" "}
                  <span className="text-secondary">‧ Agence Avanti</span>
                </h3>
                <p>
                  Intégration de maquettes graphiques en HTML/CSS, mise en page
                  responsive, et collaboration étroite avec les équipes créa.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
