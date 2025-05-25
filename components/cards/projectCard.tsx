import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export function ProjectCard({
  title,
  badge1,
  badge2,
  badge3,
  children,
  slug,
  image,
}: {
  title: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
  children: string;
  slug: string;
  image: string;
}) {
  return (
    <>
      <Card className="hidden md:flex w-full  py-0 h-100 ">
        <div className="flex gap-10 h-full relative">
          <div className="flex-1 flex flex-col justify-between px-8 py-10">
            <div className="flex gap-3">
              {badge1 && <Badge variant="custom">{badge1}</Badge>}
              {badge2 && <Badge variant="custom">{badge2}</Badge>}
              {badge3 && <Badge variant="custom">{badge3}</Badge>}
            </div>
            <div className="flex flex-col justify-center gap-5">
              <CardTitle className="lg:text-4xl">{title}</CardTitle>
              <CardDescription className="lg:text-lg">
                {children}
              </CardDescription>
              <Button className="w-fit" asChild>
                <Link href={`/projets/${slug}`}>Voir le projet</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1  flex justify-end ">
            <div className="from-transparent to-background bg-gradient-to-r  w-70 z-10 "></div>
            <Image
              className="rounded-t-lg absolute md:right-[-260] lg:right-[-150] bottom-[-40] z-0  "
              src={image}
              alt=""
              width={600}
              height={600}
            ></Image>
          </div>
        </div>
      </Card>
      {/* mobile card */}
      <Card className="flex md:hidden w-full py-0 h-100 ">
        <div className="flex-1 flex flex-col gap-6 pt-10">
          <div className="flex gap-3 n px-10">
            {badge1 && <Badge variant="custom">{badge1}</Badge>}
            {badge2 && <Badge variant="custom">{badge2}</Badge>}
            {badge3 && <Badge variant="custom">{badge3}</Badge>}
          </div>
          <div className="flex flex-col justify-center px-10 gap-3">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{children}</CardDescription>
            <Button className="w-fit" asChild>
              <Link href={`/projets/${slug}`}>Voir le projet</Link>
            </Button>
          </div>
          <div className="relative flex h-full justify-end overflow-hidden">
            <div className="from-transparent to-background bg-gradient-to-b w-full z-10 "></div>
            <Image
              className=" absolute z-0 w-full  "
              src={image}
              alt=""
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
      </Card>
    </>
  );
}

export function ProjectCardBis({
  title,
  badge1,
  badge2,
  badge3,
  children,
  slug,
  image,
}: {
  title: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
  children: string;
  slug: string;
  image: string;
}) {
  return (
    <Link href={`/projets/${slug}`}>
      <Card className="w-full h-100 pb-0">
        <CardHeader className="gap-3">
          <div className="flex gap-3 mb-10">
            {badge1 && <Badge variant="custom">{badge1}</Badge>}
            {badge2 && <Badge variant="custom">{badge2}</Badge>}
            {badge3 && <Badge variant="custom">{badge3}</Badge>}
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{children}</CardDescription>
        </CardHeader>

        <div className="relative flex h-full justify-end overflow-hidden mt-5">
          <div className="from-transparent to-background bg-gradient-to-b w-full z-10 "></div>
          <Image
            className=" absolute z-0 w-full  "
            src={image}
            alt=""
            width={1000}
            height={1000}
          ></Image>
        </div>
      </Card>
    </Link>
  );
}
