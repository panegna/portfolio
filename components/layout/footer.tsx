import { GmailLogo, LinkedinLogo } from "../logos/logos";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-25">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl text-center lg:text-5xl">
          Prêt à <span className="font-serif">travailler</span> ensemble ?
        </h2>
        <p className="text-md text-secondary lg:text-lg">
          N&apos;hésitez pas à venir m&apos;en parler !
        </p>
        <Button asChild>
          <Link href="/contact">Me contacter</Link>
        </Button>
      </div>
      <div className="w-full flex justify-between items-center py-3 border-[#FFFFFF]/8 px-5  border-t-1 lg:px-10">
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
