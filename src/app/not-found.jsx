"use client";

import Link from "next/link";
import HeroScene from "./components/HeroScene";
import { Button } from "@nextui-org/react";

export default function Custom404() {
  return (
    <>
      <section className="relative h-screen flex justify-center items-center">
        <HeroScene />
        <div className="z-10 text-center">
          <h1 className="text-8xl font-bold">404</h1>
          <p className="text-2xl mb-4">Page under construction</p>
          <Button>
            <Link href={"/"}>Go back</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
