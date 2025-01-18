"use client";

import { RiToothFill } from "react-icons/ri";
import Typography from "../typography";
import { Button } from "../ui/button";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "O nama", href: "#" },
  { name: "Usluge", href: "#services" },
  //   { name: "Pre i posle", href: "#" },
  { name: "Cenovnik", href: "#pricing" },
  { name: "064 222-3288", href: "tel:+381642223288" },
  { name: "Zakaži pregled", href: "#contact" },
];

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Ref for button
  const handleClickOutside = (event: Event) => {
    // Ensure the type is valid, and check if the click is outside the ref element
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header className="fixed top-0 z-50 flex w-full  bg-background/90 shadow-lg backdrop-blur-sm">
      <nav className="max-w-screen-xl mx-auto w-full  flex items-center justify-between gap-4 p-4 ">
        <div
          className="flex items-center gap-4 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text hover:cursor-pointer"
          onClick={() => scrollToTop()}
        >
          <RiToothFill size={50} className="text-secondary" />
          <Typography variant="h1" text="Identa" />
        </div>
        <div ref={buttonRef}>
          <IoMdMenu
            size={50}
            className="text-primary hover:text-secondary hover:cursor-pointer block lg:hidden"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`absolute lg:hidden md:rounded-sm w-full md:w-fit md:px-8 md:py-6 shadow-lg bottom-0 translate-y-full py-4 z-40 left-0 md:left-auto md:right-0 backdrop-blur-lg bg-gradient-to-r from-primary/95 to-secondary/95 items-center justify-center gap-4 transition-opacity duration-700 ease-in-out transform ${
            showMenu ? "opacity-100 flex" : "hidden opacity-0"
          }`}
          ref={ref}
        >
          <ul className="flex flex-col gap-4 text-white items-center w-full">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-md font-medium text-white hover:text-accent-foreground ${
                    index === navItems.length - 1
                      ? "text-lg font-extrabold bg-slate-400/60 w-full p-2 rounded-md"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className=" items-center gap-4 hidden lg:flex">
          {navItems.map((item, index) => (
            <a key={item.name} href={item.href}>
              <Button
                variant={`${
                  index === navItems.length - 1 ? "default" : "link"
                }`}
                className={`${
                  index === navItems.length - 1
                    ? "text-white text-xl"
                    : "text-lg font-medium text-primary hover:text-slate-500"
                }`}
              >
                {item.name}
              </Button>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
