import { Badge } from "../ui/badge";
import { PencilRuler, CodeXml } from "lucide-react";
import DisplayCards from "../ui/display-cards";
import { motion } from "motion/react";
export default function Services() {
  return (
    <section className="flex flex-col lg:flex-row px-10 md:px-20 pt-25 pb-50 md:pb-65 lg:pb-50">
      <motion.div
        initial={{ opacity: 0.0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center items-center lg:items-start  "
      >
        <Badge className="text-sm rounded-full">Services</Badge>
        <h2 className="text-4xl lg:text-5xl mt-4 text-center lg:text-start">
          Un <span className="font-serif">petit</span> couteau suisse
        </h2>
        <p className="text-lg text-secondary text-center lg:text-start">
          La polyvalence au service de vos projets digitaux.
        </p>
        <div className="flex-1 mt-10 flex flex-col gap-3">
          <div className="lg:flex md:flex-col md:justify-start gap-6 ">
            <div>
              <h3 className="text-2xl font-medium flex items-center gap-2">
                <PencilRuler color="white" size={22} />
                Webdesign
              </h3>
              <p className="text-secondary">
                Des interfaces professionnelles, pensées pour vos utilisateurs.
              </p>
            </div>
          </div>
          <div className="lg:flex md:flex-col md:justify-start gap-6 ">
            <div>
              <h3 className="text-2xl font-medium flex items-center gap-2">
                <CodeXml color="white" size={22} />
                Développement web
              </h3>
              <p className="text-secondary">
                Une solution technique adaptée à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="flex-1 hidden  md:flex justify-center lg:justify-start lg:ml-30 mt-15 lg:mt-[-80px]"
      >
        <DisplayCards></DisplayCards>
      </motion.div>
    </section>
  );
}
