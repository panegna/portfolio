import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Badge } from "../ui/badge";
import {
  CssLogo,
  FigmaLogo,
  HtmlLogo,
  JsLogo,
  NextLogo,
  NodeLogo,
  PhpLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
} from "../logos/logos";

export default function SkillsSection() {
  const size = 16;
  return (
    <div className="w-full overflow-hidden h-[100vh] mt-[-250px] flex flex-col justify-center items-center">
      <div className="relative flex h-130 mb-50 w-full flex-col items-center justify-center overflow-visible">
        <OrbitingCircles
          styleCustom="stroke-[#FFFFFF]/4 stroke-1 "
          radius={560}
        />
        <OrbitingCircles
          styleCustom="stroke-[#FFFFFF]/5 stroke-1 "
          radius={480}
          reverse
        />
        <OrbitingCircles
          speed={0.4}
          styleCustom="stroke-[#FFFFFF]/6 stroke-1 "
          radius={400}
        >
          <TypescriptLogo size={size} />
          <HtmlLogo size={size} />
          <CssLogo size={size} />
        </OrbitingCircles>
        <OrbitingCircles
          speed={0.6}
          styleCustom="stroke-[#FFFFFF]/7 stroke-1 "
          radius={320}
          reverse
        >
          <FigmaLogo size={size} />
          <TailwindLogo size={size} />
          <ReactLogo size={size} />
          <NodeLogo size={size} />
        </OrbitingCircles>
        <OrbitingCircles
          styleCustom="stroke-[#FFFFFF]/8 stroke-1 "
          radius={240}
        >
          <NextLogo size={size} />
          <JsLogo size={size} />
          <PhpLogo size={size} />
        </OrbitingCircles>
        <OrbitingCircles
          styleCustom="stroke-[#FFFFFF]/9 stroke-1"
          radius={160}
        />
        <OrbitingCircles
          styleCustom="stroke-[#FFFFFF]/10 stroke-1 "
          radius={100}
        />
        <div className="flex flex-col justify-center items-center gap-6 px-5 z-10 sm:w-140">
          <h2 className="text-4xl lg:text-5xl">
            <span className="font-serif">Un peu</span> de skills
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge className="text-sm lg:text-md" variant="custom2">
              Base de données
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Git
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              UI Design
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Kanban
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              API
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Wordpress
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Fullstack
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Maquettage
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Backend
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Social media
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              Frontend
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              UX Design
            </Badge>
            <Badge className="text-sm lg:text-md" variant="custom2">
              SEO
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
