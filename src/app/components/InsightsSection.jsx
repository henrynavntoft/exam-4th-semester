import { Image, Input } from "@nextui-org/react";
import Link from "next/link";

export default function InsightsSection() {
  return (
    <>
      <section className="my-20 mx-20">
        <h4 className=" text-center">Insights</h4>
        <div className="text-center">
          <h3 className="mb-4">Your success matters.</h3>
          <h5 className="mb-4"> Learn how to generate more time with AI</h5>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
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
        <div className="my-10">
          <h3 className="text-center my-4">Online Classes</h3>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2R8ZW58MHx8MHx8fDA%3D"
                layout="fill"
              />
              <p className="">Creative coding workshop</p>
              <p>by Henry Navntoft</p>
            </Link>
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2R8ZW58MHx8MHx8fDA%3D"
                layout="fill"
              />
              <p className="">3D with spline</p>
              <p>by Marcin Grygo</p>
            </Link>
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2R8ZW58MHx8MHx8fDA%3D"
                layout="fill"
              />
              <p className="">AI as graphic designer</p>
              <p>by Henry Navntoft & Marcin Grygo</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
