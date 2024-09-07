import React from "react";

import Image from "next/image";
import { NextUIProvider, User, Slider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col justify-center items-center w-full h-svh">
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
              <a
                href="https://www.youtube.com/watch?v=GAcq61I9IVM"
                target="_blank"
                className=" hover:scale-90 hover:animate-squeeze hover:animate-iteration-count-infinite flex justify-center"
              >
                <Image
                  src="/Images/Capa_107.png"
                  width={60}
                  height={60}
                  className="object-contain"
                  alt="Menu"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=GAcq61I9IVM"
                target="_blank"
                className=" hover:scale-90 hover:animate-squeeze hover:animate-iteration-count-infinite flex justify-center"
              >
                <Image
                  src="/Images/Capa_101.png"
                  width={60}
                  height={60}
                  className=" object-contain"
                  alt="Menu"
                />
              </a>
              <a
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
              </a>

              <a
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
              </a>
            </div>
          </div>
        </div>
        <div className="Hero flex flex-col justify-center items-center gap-8 w-11/12 h-[calc(100svh-6rem)] md:flex-row animate-zoom-in">
          <h1 className=" text-2xl uppercase rotate-[15deg] animate-blurred-fade-in animate-delay-500">
            Bienvenido Bitch
          </h1>
          <Image
            className="animate-jelly animate-delay-1000"
            src="/Images/Grupo_1.png"
            width={500}
            height={500}
            alt="Logo"
          />
          <Slider
            label="Temperature"
            step={0.01}
            maxValue={1}
            minValue={0}
            defaultValue={0.4}
            className="max-w-md"
          />
        </div>
        <div className="SegundaSeccion flex flex-col justify-center items-center gap-8 w-full">
          <User
            name="Mauricio D."
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </div>
    </NextUIProvider>
  );
}
