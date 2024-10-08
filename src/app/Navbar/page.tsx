"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  return (
    <div className="Navbar flex flex-row w-full h-24 animate-slide-in-top">
      <div className="Logo animate-spin flex justify-center items-center w-[30%] md:w-[100%] md:justify-start md:pl-5 h-ful">
        <Image
          src="/Images/LogoLK.png"
          width={64}
          height={64}
          className=" object-contain animate-blurred-fade-in animate-delay-300 hover:animate-pop hover:animate-iteration-count-infinite"
          alt="Logo"
        />
      </div>
      <div className="NavBTN flex justify-end items-center w-full md:w-2/3 xl:w-1/2 2xl:w-1/4 h-24">
        <div className="NavBox flex flex-row justify-around w-full h-full">
          <Link
            href="/about"
            className={` hover:scale-90 hover:animate-squeeze hover:animate-iteration-count-infinite flex justify-center
            ${pathname === `/about` ? "rotate-[50deg]" : ""}
          `}
          >
            <Image
              src="/Images/Capa_107.png"
              width={60}
              height={60}
              className="object-contain"
              alt="About"
            />
          </Link>
          <Link
            href="/"
            className=" hover:scale-90 hover:animate-squeeze hover:animate-iteration-count-infinite flex justify-center"
          >
            <Image
              src="/Images/Capa_101.png"
              width={60}
              height={60}
              className=" object-contain"
              alt="Home"
            />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=GAcq61I9IVM"
            target="_blank"
            className=" hover:scale-90 hover:animate-squeeze hover:animate-iteration-count-infinite flex justify-center"
          >
            <Image
              src="/Images/Capa_96.png"
              width={60}
              height={60}
              className=" object-contain"
              alt="Menu"
            />
          </Link>

          <Link
            href="https://www.youtube.com/watch?v=GAcq61I9IVM"
            target="_blank"
            className=" hover:scale-90 hover:animate-squeeze hover:animate-iteration-count-infinite flex justify-center"
          >
            <Image
              src="/Images/Capa_110.png"
              width={60}
              height={60}
              className=" object-contain"
              alt="Menu"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
