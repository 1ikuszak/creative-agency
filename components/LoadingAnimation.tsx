"use client";

import React, { useState, useEffect } from "react";

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 10 ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const renderProgressBar = () => {
    const bar = Array(10).fill("░");
    for (let i = 0; i < progress; i++) {
      bar[i] = "█";
    }
    return bar.join("");
  };

  return (
    <div style={{ fontFamily: "monospace", fontSize: "16px" }}>
      <p>Loading: [{renderProgressBar()}]</p>
    </div>
  );
}
