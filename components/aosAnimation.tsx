"use client";
import React, { useEffect } from "react";
import AOS from "aos";
function AousAnimation({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);
  return <>{children}</>;
}
export default AousAnimation;
