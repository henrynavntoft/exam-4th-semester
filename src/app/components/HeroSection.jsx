import { useRef } from "react";
import HeroScene from "./HeroScene";

export default function HeroSection() {
  const scrollTargetRef = useRef(null);

  const scrollToTarget = () => {
    if (scrollTargetRef.current) {
      window.scrollTo({
        top: scrollTargetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section className="relative h-screen flex justify-center items-center">
        {/* <HeroScene /> */}
        <div className="z-10 text-center">
          <h1 className="text-6xl sm:text-8xl font-bold">Etheray</h1>
          <p className="text-xl mt-4 max-w-2xl mx-4">
            Bringing a Personal Touch to Your Business - We are Here to Make
            Your Digital World Easier and More Inspiring.
          </p>
        </div>
        <p
          onClick={scrollToTarget}
          className="absolute bottom-0 mb-32 text-xl cursor-pointer"
        >
          Scroll
        </p>
      </section>

      <section
        ref={scrollTargetRef}
        className=" h-screen flex flex-col sm:flex-row justify-center items-center gap-32"
      >
        <div className="max-w-sm">
          <h3 className="text-4xl">
            Future of experience <br /> That Resonate Beyond the Screen
          </h3>
        </div>

        <div className="max-w-sm">
          <p className="text-2xl font-bold">How we do it</p>
          <p className="text-x">
            In the heart of Copenhagen, we merge human ingenuity with AIs
            precision, transforming bold ideas into digital realities. Our
            expertise is not just in creating; it is in empowering you with the
            knowledge to excel in a digital-first future. Join us, and lets
            shape the digital landscape with clarity, creativity, and a human
            touch.
          </p>
        </div>
      </section>
    </>
  );
}
