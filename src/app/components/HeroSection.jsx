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
          <h1 className="logo">Etheray</h1>
          <p className=" flex justify-center mt-4 mx-4">
            Bringing a Personal Touch to Your Business - We are Here to Make
            Your Digital World Easier and More Inspiring.
          </p>
        </div>
        <p
          onClick={scrollToTarget}
          className="absolute bottom-0 mb-32 cursor-pointer"
        >
          Scroll
        </p>
      </section>

      <section
        ref={scrollTargetRef}
        className="h-screen flex flex-col justify-center items-center mx-auto max-w-2xl gap-10 "
      >
        <div className="">
          <h2 className="">
            Future of experience That Resonate Beyond the Screen
          </h2>
        </div>

        <div className="">
          <h5 className="">How we do it</h5>
          <p className="">
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
