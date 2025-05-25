"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LinkedinLogo, GmailLogo } from "@/components/logos/logos";
import { ContactForm } from "@/components/forms/contactForm";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <section className="flex flex-col gap-6 px-5 justify-center flex-1 items-center ">
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
          <Badge className="mb-5" variant="custom">
            Contact
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex justify-start items-center gap-4"
        >
          <Image src="/images/moi.png" alt="" width="50" height="50" />
          <div className="">
            <p className="text-lg font-medium">Une idée ?</p>
            <p className="text-secondary text-sm">
              N&apos;hésitez pas à me contacter
            </p>
          </div>
        </motion.div>
        <ContactForm />
      </section>

      <div className="w-full h-fit flex justify-between items-center py-3 border-[#FFFFFF]/8 px-10  border-t-1">
        <div className="text-[12px]">© Made with 💗 by Panegna</div>
        <div className="text-[12px] flex gap-2">
          <Button asChild variant="ghost">
            <Link
              href="https://linkedin.com/in/panegna-sydaphasavanh"
              target="_blank"
            >
              <LinkedinLogo size={14}></LinkedinLogo>
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="mailto:panegna.sydaphasavanh@gmail.com" target="_blank">
              <GmailLogo size={14}></GmailLogo>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
