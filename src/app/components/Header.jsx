"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Profile", "Dashboard", "Activity", "Analytics", "System"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <Link href="/" color="foreground">
          <h5 className="text-2xl">Etheray</h5>
        </Link>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full flex justify-center text-4xl pt-4 "
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
