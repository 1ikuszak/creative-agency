"use client";

import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-[700px]"
      data-url="https://calendly.com/contact-drewmp/30min"
    />
  );
}
