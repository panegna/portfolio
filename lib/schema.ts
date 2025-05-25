import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, {
    message: "Champ requis",
  }),
  mail: z.string().email({
    message: "Adresse email invalide",
  }),
  content: z.string().min(2, {
    message: "Champ requis",
  }),
});
