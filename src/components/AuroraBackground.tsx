import React from "react";

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Aurora Violet Blob */}
      <div
        className="absolute -top-[15%] left-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full animate-aurora-1 opacity-20 dark:opacity-25"
        style={{
          background: "radial-gradient(circle, #7C5CFF 0%, rgba(124, 92, 255, 0) 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Soft Aurora Cyan Blob */}
      <div
        className="absolute top-[20%] -right-[10%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full animate-aurora-2 opacity-15 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, rgba(34, 211, 238, 0) 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Mid-page Divider Aurora Bloom */}
      <div
        className="absolute top-[55%] left-[20%] w-[550px] h-[550px] rounded-full animate-aurora-1 opacity-10 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #7C5CFF 0%, rgba(124, 92, 255, 0) 70%)",
          filter: "blur(130px)",
        }}
      />

      {/* Lower page Aurora Bloom */}
      <div
        className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full animate-aurora-2 opacity-15 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, rgba(34, 211, 238, 0) 70%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
};
