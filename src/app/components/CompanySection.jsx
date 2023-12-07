import { Image } from "@nextui-org/react";

export default function CompanySection() {
  return (
    <>
      <section className="my-10">
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
    </>
  );
}
