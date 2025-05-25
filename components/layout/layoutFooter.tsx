"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function LayoutFooter() {
  const pathname = usePathname();

  const hideFooter = pathname === "/contact";

  return <>{!hideFooter && <Footer />}</>;
}
