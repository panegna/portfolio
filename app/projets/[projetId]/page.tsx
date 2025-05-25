import { SingleProjectHero } from "@/components/layout/hero";
import { PROJECTS } from "@/lib/data/projects";
import {
  ReactLogo,
  FigmaLogo,
  TailwindLogo,
  NodeLogo,
  NextLogo,
  JsLogo,
  PhpLogo,
  TypescriptLogo,
  HtmlLogo,
  CssLogo,
  PythonLogo,
  SeleniumLogo,
  VercelLogo,
  ZodLogo,
  ShadcnLogo,
} from "@/components/logos/logos";
import Image from "next/image";
import * as motion from "motion/react-client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Page(props: {
  params: {
    projetId: string;
  };
}) {
  const { projetId } = await props.params;
  const projet = PROJECTS.find((projet) => projet.slug === projetId);

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  const size = 18;

  return (
    <>
      <SingleProjectHero title={projet.title} />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="px-5 pb-30 lg:px-20 lg:flex"
      >
        <section className="flex-1/3 lg:pr-20 flex flex-col gap-2.5 pb-15 lg:pb-0">
          <div className="">
            <h4 className="text-sm text-secondary">Catégorie</h4>
            <p className="text-xl">{projet.categorie}</p>
          </div>
          <hr className="border-[#FFFFFF]/8 border-0.5" />
          <div>
            <h4 className="text-sm text-secondary">Entité</h4>
            <p className="text-xl">{projet.entite}</p>
          </div>
          <hr className="border-[#FFFFFF]/8 border-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-sm text-secondary">Stack</h4>
            <div className="grid grid-cols-7 lg:grid-cols-5 gap-3 w-fit">
              {projet.stack.includes("react") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <ReactLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>ReactJS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("figma") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FigmaLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Figma</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("tailwind") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <TailwindLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>TailwindCss</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("node") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NodeLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>NodeJS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("next") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NextLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>NextJS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("js") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <JsLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Javascript</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("php") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <PhpLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Php</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("ts") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <TypescriptLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Typescript</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("html") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HtmlLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>HTML</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("css") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CssLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("python") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <PythonLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Python</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("selenium") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <SeleniumLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Selenium</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("vercel") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <VercelLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vercel</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("zod") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <ZodLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Zod</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {projet.stack.includes("shadcn") && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <ShadcnLogo className="rounded-md" size={size} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Shadcn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </section>
        <section className="flex-2/3 flex flex-col gap-6">
          <p className="text-2xl font-light text-justify md:text-start ">
            {projet.primaryContent}
          </p>
          <p className="text-lg text-secondary text-justify md:text-start">
            {projet.secondaryContent}
          </p>
          <Image
            className="rounded-xl w-full"
            src={projet.secondaryImage}
            alt=""
            width={3000}
            height={3000}
          />
        </section>
      </motion.div>
    </>
  );
}
