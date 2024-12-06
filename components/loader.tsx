"use client";

export default function Loader() {
  return (
    <div className="font-mono text-white space-y-1 text-center">
      <div className="animate-pulse text-lg">
        <span className="opacity-40">[</span>
        <span className="animate-pulse">⠋</span>
        <span className="animate-pulse delay-100">⠙</span>
        <span className="animate-pulse delay-200">⠹</span>
        <span className="opacity-40">]</span>
      </div>
    </div>
  );
}
