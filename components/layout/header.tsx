"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Header({ className }: { className: string }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 justify-between items-center px-20 py-4 backdrop-blur-sm  border-b-1 border-[#FFFFFF]/8 ${className}`}
    >
      <div>
        <Link href="/">
          <Image src="/images/logo-blanc.png" alt="" width={50} height={200} />
        </Link>{" "}
      </div>
      <nav className="text-sm flex gap-4 items-center">
        <Link className="p-3" href="/projets">
          Projets
        </Link>
        <Link className="p-3" href="/a-propos">
          À propos
        </Link>

        <Button size="default" asChild>
          <Link className="" href="/contact">
            Contact
          </Link>
        </Button>
      </nav>
    </div>
  );
}
