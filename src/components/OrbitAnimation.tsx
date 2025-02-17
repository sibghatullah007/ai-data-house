import Image from "next/image";
import React from "react";

const OrbitAnimation: React.FC = () => {
  return (
    <div className="flex relative justify-center items-center aspect-square w-[95%]">
      <div className="center">
        <Image height={50} width={30} src="/center.png" alt="AI" />
      </div>

      <div className="orbit orbit1">
        <div className="item">
          <Image height={50} width={30} src="/center.png" alt="Logo" />
        </div>
        <div className="dot"></div>
      </div>

      <div className="orbit orbit2">
        <div className="item">
          <Image  height={50} width={30}src="/center.png" alt="Logo" />
        </div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="orbit orbit3">
        <div className="item">
          <Image  height={50} width={30}src="/center.png" alt="Logo" />
        </div>
        <div className="item">
          <Image height={50} width={30} src="/center.png" alt="Logo" />
        </div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default OrbitAnimation;
