import { Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col mb-4">
          <h4 className="mb-4">Portfolio</h4>
          <p className="max-w-sm mb-4">
            In the heart of Copenhagen, we merge human ingenuity with AIs
            precision, transforming bold ideas into digital realities. Our
            expertise is not just in creating; it is in empowering you with the
            knowledge to excel in a digital-first future. Join us, and lets
            shape the digital landscape with clarity, creativity, and a human
            touch.
          </p>

          <Link href={"/port"}>
            <Button>See all projects</Button>
          </Link>
        </div>

        <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-4 pt-4">
          <div>
            <Image
              src="/project-ex.png"
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
    </>
  );
}
