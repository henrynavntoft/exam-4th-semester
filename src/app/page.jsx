"use client";
import { Image, Input } from "@nextui-org/react";
import Link from "next/link";
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

      <section className="my-10">
        <h2 className="text-6xl text-center text-primary mb-8">Services</h2>
        <div>
          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">01</span>
            <h2 className="text-4xl font-bold">Experience Design</h2>
            <p className="max-w-sm">
              Crafting visually stunning and user-friendly interfaces that
              breathe life into your brands story.
            </p>
          </div>

          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">02</span>
            <h2 className="text-4xl font-bold">Development</h2>
            <p className="max-w-sm">
              Building scalable, and intuitive websites that drive engagement
              and conversion.
            </p>
          </div>

          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">03</span>
            <h2 className="text-4xl font-bold">Branding</h2>
            <p className="max-w-sm">
              Drawing out the essence of your brand to craft an image that
              sticks and stories that spread.
            </p>
          </div>

          <div className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative">
            <span className="text-2xl">04</span>
            <h2 className="text-4xl font-bold">Consultancy</h2>
            <p className="max-w-sm">
              Expert insights to navigate the digital terrain and elevate your
              business strategy with AI-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row my-10 ">
        <div className="flex-1 flex flex-col p-8">
          <h2 className="text-6xl text-primary mb-4">Portfolio</h2>
          <p className="max-w-xl mb-4">
            In the heart of Copenhagen, we merge human ingenuity with AIs
            precision, transforming bold ideas into digital realities. Our
            expertise is not just in creating; it is in empowering you with the
            knowledge to excel in a digital-first future. Join us, and lets
            shape the digital landscape with clarity, creativity, and a human
            touch.
          </p>

          <Link href={"/portfolio"}>
            <Button>See all projects</Button>
          </Link>
        </div>

        <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-4 p-8">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfDF8MHx8fDA%3D"
              alt="Project 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-6xl text-center mb-8 text-primary">Company Core</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-8">
          <article className="flex gap-8 md:flex-row flex-col">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Marcin</h2>
              <p className="text-xl">Visual Designer</p>
              <p className="mt-4 max-w-xl">
                As a creative visual designer, I bring imagination to life,
                painting the digital canvas with designs that tell your unique
                story in vivid color and form.
              </p>
              <div className="flex gap-6 mt-4">
                <Image
                  radius="none"
                  className="dark:invert"
                  alt=""
                  src="linkedin.svg"
                  width={30}
                  height={30}
                />
                <Image
                  radius="none"
                  className="dark:invert"
                  alt=""
                  src="be.svg"
                  width={30}
                  height={30}
                />
                <Image
                  radius="none"
                  className="dark:invert"
                  alt=""
                  src="web.svg"
                  width={30}
                  height={30}
                />
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

          <article className="flex gap-8 md:flex-row flex-col">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Henry</h2>
              <p className="text-xl">Developer</p>
              <p className="mt-4 max-w-xl">
                As an interactive website developer and marketer, I weave
                together engaging narratives and innovative technologies,
                ensuring every click connects and captivates.
              </p>
              <div className="flex gap-6 mt-4">
                <Image
                  radius="none"
                  className="dark:invert"
                  alt=""
                  src="linkedin.svg"
                  width={30}
                  height={30}
                />
                <Image
                  radius="none"
                  className="dark:invert"
                  alt=""
                  src="github-mark.svg"
                  width={30}
                  height={30}
                />
                <Image
                  radius="none"
                  className="dark:invert"
                  alt=""
                  src="web.svg"
                  width={30}
                  height={30}
                />
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

      <section className="mx-10">
        <h2 className="text-6xl text-center mb-20 text-primary">Insights</h2>
        <div className="text-center m-4">
          <h3 className="text-6xl mb-4">Your success matters.</h3>
          <h4 className="text-3xl"> Learn how to generate more time with AI</h4>
        </div>
        <div className="flex m-4 flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 flex-1 justify-center ">
            <h3>Creative workshops</h3>
            <p>
              In our Creative Workshops, we guide companies on integrating AI
              into their daily operations, aiming to enhance efficiency and
              spark creativity. Our focus is on making AI approachable for
              employees of all ages, equipping them with the skills needed for
              the evolving digital landscape. At Etheray, we believe in
              demystifying AI, shifting from skepticism to empowerment. Join us
              to learn how AI can be a tool for innovation, giving your team the
              edge in a tech-forward world.
            </p>
            <Input
              type="email"
              isRequired
              variant="bordered"
              label="Email"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-1 justify-center items-center">
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMGxvb2tpbmclMjBhdCUyMGNvbXB1dGVyfGVufDB8fDB8fHww"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-center text-6xl my-4">Online Classes</h3>
          <div className="flex flex-col md:flex-row justify-between mx-4 gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2R8ZW58MHx8MHx8fDA%3D"
                layout="fill"
              />
              <p className="font-bold text-xl">Creative coding workshop</p>
              <p>by Henry Navntoft</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2R8ZW58MHx8MHx8fDA%3D"
                layout="fill"
              />
              <p className="font-bold text-xl">3D with spline</p>
              <p>by Marcin Grygo</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2R8ZW58MHx8MHx8fDA%3D"
                layout="fill"
              />
              <p className="font-bold text-xl">AI as graphic designer</p>
              <p>by Henry Navntoft & Marcin Grygo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
