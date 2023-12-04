"use client";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Spline
        scene="https://prod.spline.design/gAxm3pT7UimwtwzH/scene.splinecode"
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
      />

      <div className="z-10 text-center">
        <h1 className="text-8xl font-bold">Etheray</h1>
        <p className="text-xl mt-4">
          Bringing a Personal Touch to Your Business - We are Here to Make Your
          Digital World Easier and More Inspiring.
        </p>
      </div>
    </div>
  );
}
