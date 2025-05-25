import { Marquee } from "../magicui/marquee";

export function Ticker({
  children,
  primary,
  secondary,
}: {
  children: string;
  primary: string;
  secondary: string;
}) {
  const style = "text-background py-1 text-sm";

  const repeatCount = 20; // Répéter le texte 20 fois
  const repeatedText = Array.from({ length: repeatCount }, () => children);
  return (
    <div className=" h-44 flex justify-between relative items-center mt-10">
      <div className="from-background to-transparent bg-gradient-to-r h-40 w-70 z-10"></div>
      <div className="from-background to-transparent bg-gradient-to-l h-40 w-70 z-10"></div>
      <div className="absolute w-full">
        <div className={`${secondary} ${style} rotate-2 h-6 absolute w-full`}>
          <span></span>
        </div>

        <div
          className={`${primary} ${style} -rotate-[0.5deg] whitespace-nowrap`}
        >
          <Marquee pauseOnHover={true}>
            {repeatedText.map((item, index) => (
              <span
                key={index}
                className={`mx-2 ${index % 2 === 0 ? "font-bold" : ""}`}
              >
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
