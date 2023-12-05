"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeroScene from "./components/HeroScene";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex justify-center items-center">
        <HeroScene />
        <div className="z-10 text-center">
          <h1 className="text-8xl">Etheray</h1>
          <p className="text-xl mt-4 max-w-2xl">
            Bringing a Personal Touch to Your Business - We are Here to Make
            Your Digital World Easier and More Inspiring.
          </p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-6xl text-center text-primary mb-8">Services</h2>
        <div>
          <div className="border-b border-foreground py-8 flex justify-evenly items-center hover-effect relative">
            <span className="text-2xl">01</span>
            <h2 className="text-4xl font-bold">Experience Design</h2>
            <p className="max-w-sm">
              Crafting visually stunning and user-friendly interfaces that
              breathe life into your brands story.
            </p>
          </div>

          <div className="border-b border-foreground py-8 flex justify-evenly items-center hover-effect relative">
            <span className="text-2xl">02</span>
            <h2 className="text-4xl font-bold">Development</h2>
            <p className="max-w-sm">
              Building scalable, and intuitive websites that drive engagement
              and conversion.
            </p>
          </div>

          <div className="border-b border-foreground py-8 flex justify-evenly items-center hover-effect relative">
            <span className="text-2xl">03</span>
            <h2 className="text-4xl font-bold">Branding</h2>
            <p className="max-w-sm">
              Drawing out the essence of your brand to craft an image that
              sticks and stories that spread.
            </p>
          </div>

          <div className="border-b border-foreground py-8 flex justify-evenly items-center hover-effect relative">
            <span className="text-2xl">04</span>
            <h2 className="text-4xl font-bold">Consultancy</h2>
            <p className="max-w-sm">
              Expert insights to navigate the digital terrain and elevate your
              business strategy with AI-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-6xl text-center mb-20 text-primary">Portfolio</h2>
      </section>

      <section>
        <h2 className="text-6xl text-center mb-20 text-primary">
          Company Core
        </h2>
      </section>

      <section>
        <h2 className="text-6xl text-center mb-20 text-primary">Insights</h2>
      </section>
    </>
  );
}
