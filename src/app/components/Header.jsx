"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <>
      <div className="m-4 flex justify-between">
        <h5>Etheray</h5>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
