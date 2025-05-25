"use client";

// import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "system" } = useTheme();

  return (
    <Sonner
      className="toaster group bg-foreground border-[#FFFFFF]/8"
      {...props}
    />
  );
};

export { Toaster };
