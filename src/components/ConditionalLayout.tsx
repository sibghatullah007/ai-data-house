// components/ConditionalLayout.tsx (Client Component)
"use client";  // Mark this as a client-side component

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ContactHeader from "@/components/ContactHeader";
// import ContactFooter from "@/components/ContactFooter";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/contact" || pathname === "/thank-you"  ? (
        <>
          {children}
        </>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
}
