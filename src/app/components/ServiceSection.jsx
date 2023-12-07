export default function ServiceSection() {
  return (
    <>
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
      ;
    </>
  );
}
