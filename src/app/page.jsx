"use client";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <section className=" h-screen flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/gAxm3pT7UimwtwzH/scene.splinecode"
          className="absolute w-full h-full top-0 left-0 pointer-events-none"
        />

        <div className="z-10 text-center">
          <h1 className="text-8xl">Etheray</h1>
          <p className="text-xl mt-4 max-w-2xl">
            Bringing a Personal Touch to Your Business - We are Here to Make
            Your Digital World Easier and More Inspiring.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="space-y-4">
          <div className="border-t border-b py-4">
            <h2 className="text-2xl text-center">Experience Design</h2>
            <p className="text-center mt-2">Details about Service ...</p>
          </div>
          <div className="border-b  py-4">
            <h2 className="text-2xl  text-center">Development</h2>
            <p className="text-center 0 mt-2">Details about Service ...</p>
          </div>
          <div className="border-b  py-4">
            <h2 className="text-2xl text-center">Branding</h2>
            <p className="text-center mt-2">Details about Service ...</p>
          </div>
          <div className="border-b py-4">
            <h2 className="text-2xl text-center">Consultancy</h2>
            <p className="text-center mt-2">Details about Service ...</p>
          </div>
        </div>
      </section>
    </>
  );
}
