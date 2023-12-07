import { Image, Input } from "@nextui-org/react";

export default function InsightsSection() {
  return (
    <>
      <section className="my-10">
        <h2 className="text-6xl text-center  text-primary">Insights</h2>
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
        <div className="my-10">
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
