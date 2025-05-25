"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { GmailLogo, LinkedinLogo } from "../logos/logos";
import Link from "next/link";
import { formSchema } from "@/lib/schema";
import { sendEmail } from "@/app/api/send/route";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { motion } from "motion/react";

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      content: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const res = await sendEmail(values);
    const now = new Date();
    const formattedDate = now.toLocaleString("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    if (res.success) {
      router.push("/");
      setTimeout(() => {
        toast("Votre message a bien été envoyé", {
          description: formattedDate,
          action: {
            label: "Fermer",
            onClick: () => console.log("Undo"),
          },
        });
      }, 1500);
    } else {
      console.error("erreur d'envoi : ", res.error);
    }
  }

  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full lg:w-[35%]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-1 border-[#FFFFFF]/8 placeholder-[#FFFFFF]/8"
                  placeholder="Nom"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-1 border-[#FFFFFF]/8 placeholder-[#FFFFFF]/8"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="border-1 border-[#FFFFFF]/8 "
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <hr className="border-[#FFFFFF]/8 border-0.5 w-full" />
          <span className="text-sm text-secondary">ou</span>
          <hr className="border-[#FFFFFF]/8 border-0.5 w-full" />
        </div>
        <div className="flex justify-center items-center mb-10 gap-4">
          <Link
            href="https://linkedin.com/in/panegna-sydaphasavanh"
            target="_blank"
          >
            <LinkedinLogo size={20} />
          </Link>
          <Link href="mailto:panegna.sydaphasavanh@gmail.com" target="_blank">
            <GmailLogo size={20} />
          </Link>
        </div>

        <Button
          className="w-full flex items-center justify-center gap-2"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          )}
          {form.formState.isSubmitting ? "Envoi..." : "Envoyer"}
        </Button>
      </motion.form>
    </Form>
  );
}
