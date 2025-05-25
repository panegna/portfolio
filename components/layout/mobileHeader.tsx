"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function MobileHeader({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col  justify-between items-center px-5 py-4 backdrop-blur-sm  border-b-1 border-[#FFFFFF]/8 ${className}`}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <Image
              src="/images/logo-blanc.png"
              alt=""
              width={40}
              height={200}
            />
          </Link>{" "}
        </div>
        <Button asChild variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu size={30} /> : <X size={30} />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-sm mt-4"
          >
            <Link
              className="p-3"
              href="/projets"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
            <Link
              className="p-3"
              href="/a-propos"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Button className="mt-3" size="default" asChild>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
