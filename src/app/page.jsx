"use client";
import { Image } from "@nextui-org/react";
import HeroScene from "./components/HeroScene";
import { Button } from "@nextui-org/react";
import { useRef } from "react";

export default function Home() {
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
        <HeroScene />
        <div className="z-10 text-center">
          <h1 className="text-9xl font-bold">Etheray</h1>
          <p className="text-xl mt-4 max-w-2xl">
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

      <section className="my-10 h-screen">
        <h2 className="text-6xl text-center text-primary mb-8">Services</h2>
        <div>
          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col sm:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">01</span>
            <h2 className="text-4xl font-bold">Experience Design</h2>
            <p className="max-w-sm">
              Crafting visually stunning and user-friendly interfaces that
              breathe life into your brands story.
            </p>
          </div>

          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col sm:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">02</span>
            <h2 className="text-4xl font-bold">Development</h2>
            <p className="max-w-sm">
              Building scalable, and intuitive websites that drive engagement
              and conversion.
            </p>
          </div>

          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col sm:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">03</span>
            <h2 className="text-4xl font-bold">Branding</h2>
            <p className="max-w-sm">
              Drawing out the essence of your brand to craft an image that
              sticks and stories that spread.
            </p>
          </div>

          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col sm:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">04</span>
            <h2 className="text-4xl font-bold">Consultancy</h2>
            <p className="max-w-sm">
              Expert insights to navigate the digital terrain and elevate your
              business strategy with AI-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10 h-screen flex flex-col justify-center items-center">
        <h2 className="text-6xl text-center text-primary mb-8">Portfolio</h2>
        <div className="text-center flex flex-col items-center">
          <p className="max-w-xl mb-2">
            In the heart of Copenhagen, we merge human ingenuity with AIs
            precision, transforming bold ideas into digital realities. Our
            expertise is not just in creating; it is in empowering you with the
            knowledge to excel in a digital-first future. Join us, and lets
            shape the digital landscape with clarity, creativity, and a human
            touch.
          </p>
          <Button>All projects</Button>
        </div>
      </section>

      <section className="my-10 h-screen">
        <h2 className="text-6xl text-center mb-8 text-primary">Company Core</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-8">
          <article className="flex gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Marcin</h2>
              <p className="text-xl">Visual Designer</p>
              <p className="mt-4 max-w-xl">
                As a creative visual designer, I bring imagination to life,
                painting the digital canvas with designs that tell your unique
                story in vivid color and form.
              </p>
              <div className="flex gap-6 mt-4">
                <img className="dark:invert" alt="" src="linkedin.svg" />
                <img className="dark:invert" alt="" src="linkedin.svg" />
                <img className="dark:invert" alt="" src="linkedin.svg" />
              </div>
            </div>
            <div className="flex-1">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
          </article>

          <article className="flex flex-row-reverse gap-8 ">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Henry</h2>
              <p className="text-xl">Developer</p>
              <p className="mt-4 max-w-xl">
                As an interactive website developer and marketer, I weave
                together engaging narratives and innovative technologies,
                ensuring every click connects and captivates.
              </p>
              <div className="flex gap-6 mt-4">
                <img className="dark:invert" alt="" src="linkedin.svg" />
                <img className="dark:invert" alt="" src="linkedin.svg" />
                <img className="dark:invert" alt="" src="linkedin.svg" />
              </div>
            </div>

            <div className="flex-1">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
          </article>
        </div>
      </section>

      {/* <section>
        <h2 className="text-6xl text-center mb-20 text-primary">Insights</h2>
      </section> */}
    </>
  );
}
