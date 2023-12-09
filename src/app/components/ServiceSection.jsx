import Link from "next/link";

export default function ServiceSection() {
  return (
    <>
      <section className="p-0 py-10">
        <h4 className=" text-center mb-8">Services</h4>
        <div>
          <Link
            href={"/services"}
            className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative"
          >
            <span className="">01</span>
            <h3 className="">Experience Design</h3>
            <p className="max-w-sm">
              Crafting visually stunning and user-friendly interfaces that
              breathe life into your brands story.
            </p>
          </Link>

          <Link
            href={"/services"}
            className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative"
          >
            <span className="">02</span>
            <h3 className="">Development</h3>
            <p className="max-w-sm">
              Building scalable, and intuitive websites that drive engagement
              and conversion.
            </p>
          </Link>

          <Link
            href={"/services"}
            className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative"
          >
            <span className="">03</span>
            <h3 className="">Branding</h3>
            <p className="max-w-sm">
              Drawing out the essence of your brand to craft an image that
              sticks and stories that spread.
            </p>
          </Link>

          <Link
            href={"/services"}
            className="cursor-pointer border-b border-foreground py-8 flex flex-col md:flex-row justify-evenly items-center hover-effect relative"
          >
            <span className="">04</span>
            <h3 className="">Consultancy</h3>
            <p className="max-w-sm">
              Expert insights to navigate the digital terrain and elevate your
              business strategy with AI-driven solutions.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
