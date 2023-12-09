"use client";

import { useRef } from "react";
import HeroScene from "../components/HeroScene";
import { Image } from "@nextui-org/react";

export default function Services() {
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
      {/* <HeroScene /> */}
      <section className="relative h-screen flex justify-center items-center">
        <div className="z-10 mx-10 text-center">
          <h4 className="">Explore our services</h4>
          <h1 className="flex justify-center mt-4 mx-4">
            Flexible for all your needs
          </h1>
        </div>
        <p
          onClick={scrollToTarget}
          className="absolute bottom-0 mb-32 cursor-pointer"
        >
          Scroll
        </p>
      </section>

      <section ref={scrollTargetRef} className="p-10">
        <article className="flex gap-4 my-10">
          <div className="flex-1">
            <div>
              <p>01</p>
            </div>
            <div>
              <h2>Experience Design</h2>
              <p>
                At Etheray, our Experience Design is more than visual appeal it
                is about creating an intuitive path for users to explore and
                interact with ease. Imagine an online gallery where art
                enthusiasts can virtually navigate through exhibitions; we make
                such engaging journeys possible. By mapping out every click,
                swipe, and scroll, we ensure that each digital touchpoint is a
                step toward a delightful user experience. Designing intuitive
                navigation structures. Crafting user-centric interfaces.
                Streamlining user interactions for optimal flow.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
        <article className="flex gap-4 my-10">
          <div className="flex-1">
            <div>
              <p>02</p>
            </div>
            <div>
              <h2>Web Development</h2>
              <p>
                At Etheray, our Experience Design is more than visual appeal it
                is about creating an intuitive path for users to explore and
                interact with ease. Imagine an online gallery where art
                enthusiasts can virtually navigate through exhibitions; we make
                such engaging journeys possible. By mapping out every click,
                swipe, and scroll, we ensure that each digital touchpoint is a
                step toward a delightful user experience. Designing intuitive
                navigation structures. Crafting user-centric interfaces.
                Streamlining user interactions for optimal flow.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
        <article className="flex gap-4 my-10">
          <div className="flex-1">
            <div>
              <p>03</p>
            </div>
            <div>
              <h2>Branding</h2>
              <p>
                At Etheray, our Experience Design is more than visual appeal it
                is about creating an intuitive path for users to explore and
                interact with ease. Imagine an online gallery where art
                enthusiasts can virtually navigate through exhibitions; we make
                such engaging journeys possible. By mapping out every click,
                swipe, and scroll, we ensure that each digital touchpoint is a
                step toward a delightful user experience. Designing intuitive
                navigation structures. Crafting user-centric interfaces.
                Streamlining user interactions for optimal flow.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
        <article className="flex gap-4 my-10">
          <div className="flex-1">
            <div>
              <p>04</p>
            </div>
            <div>
              <h2>Consultancy</h2>
              <p>
                At Etheray, our Experience Design is more than visual appeal it
                is about creating an intuitive path for users to explore and
                interact with ease. Imagine an online gallery where art
                enthusiasts can virtually navigate through exhibitions; we make
                such engaging journeys possible. By mapping out every click,
                swipe, and scroll, we ensure that each digital touchpoint is a
                step toward a delightful user experience. Designing intuitive
                navigation structures. Crafting user-centric interfaces.
                Streamlining user interactions for optimal flow.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
      </section>
    </>
  );
}
