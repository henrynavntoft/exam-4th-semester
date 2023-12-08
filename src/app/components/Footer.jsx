"use client";
import { Input, RadioGroup, Radio, Textarea, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import UnderFooter from "./UnderFooter";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify- align-top m-10 gap-10 ">
        <div className="flex-1">
          <h5 className="text-6xl font-bold mb-4">
            Develop your <br /> skills with <br /> Etheray
          </h5>
          <div className="flex gap-8 ">
            <div className="space-y-2">
              <p className=" underline">Structure</p>
              <ol className="space-y-2">
                <Link href={"/"}>
                  <li>Home</li>
                </Link>
                <Link href={"/services"}>
                  <li>Services</li>
                </Link>
                <Link href={"/portfolio"}>
                  <li>Portfolio</li>
                </Link>
                <Link href={"/about"}>
                  <li>About</li>
                </Link>
              </ol>
            </div>
            <div className="flex flex-col justify-between ">
              <p className="underline">Check out our social</p>
              <div className="flex gap-6 text-center items-center">
                <Link href={"/"}>
                  <Image
                    className="dark:invert"
                    radius="none"
                    src="insta.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    className="dark:invert"
                    radius="none"
                    src="linkedin.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    className="dark:invert"
                    radius="none"
                    src="web.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex gap-6">
                <Link href={"/"} className="flex flex-col">
                  <span>Carrer</span>
                  <Image
                    src="thing.svg"
                    width={30}
                    height={30}
                    alt=""
                    className="dark:invert"
                    radius="none"
                  />
                </Link>
                <Link href={"/"} className="flex flex-col">
                  <span>Teams</span>
                  <Image
                    src="thing.svg"
                    width={30}
                    height={30}
                    alt=""
                    className="dark:invert"
                    radius="none"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col flex-1 gap-6" action="">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="name"
              isRequired
              variant="bordered"
              label="Name"
              placeholder="Enter your name"
            />
            <Input
              type="email"
              isRequired
              variant="bordered"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <Textarea
            label="Message"
            isRequired
            variant="bordered"
            placeholder="Enter your message"
          />
          <div className="flex items-end gap-10 justify-between">
            <RadioGroup
              isRequired
              orientation="horizontal"
              label="Project Budget"
            >
              <Radio value="1-10k">1-10k</Radio>
              <Radio value="10-20k">10-20k</Radio>
              <Radio value="20-50k">20-50k</Radio>
              <Radio value="50-100k">50-100k</Radio>
            </RadioGroup>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </section>
      <UnderFooter />
    </>
  );
}
