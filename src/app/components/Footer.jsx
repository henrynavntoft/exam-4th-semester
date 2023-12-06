"use client";
import { Input, RadioGroup, Radio, Textarea, Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-center mb-32 mx-10 gap-10">
        <div className="flex-1">
          <h2 className="text-7xl font-bold">
            Develop your skills with Etheray
          </h2>
        </div>
        <form className="flex flex-col flex-1 gap-4" action="">
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
    </>
  );
}
