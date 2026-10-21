import React from "react";

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Electric Cyan ambient light top */}
      <div
        className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00F2FE 0%, rgba(0, 242, 254, 0) 70%)",
          filter: "blur(140px)",
        }}
      />

      {/* Soft Purple ambient light right */}
      <div
        className="absolute top-[25%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #4FACFE 0%, rgba(79, 172, 254, 0) 70%)",
          filter: "blur(150px)",
        }}
      />

      {/* Subtle mid-page glow */}
      <div
        className="absolute top-[65%] left-[10%] w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00F2FE 0%, rgba(0, 242, 254, 0) 70%)",
          filter: "blur(160px)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
