import React from "react";

import {
  NextUIProvider,
  User,
  Slider,
  Card,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col justify-center items-center w-full h-svh">
        <div className="Hero flex flex-col-reverse justify-center items-center gap-8 w-11/12 h-[calc(100svh-6rem)] md:flex-row animate-zoom-in">
          <h1 className=" text-2xl uppercase rotate-[15deg] animate-blurred-fade-in animate-delay-500">
            Bienvenido Bitch
          </h1>
          <Image
            className=" animate-jelly animate-delay-1000 object-contain md:object-fill"
            src="/Images/Grupo_1.png"
            width={500}
            height={420}
            alt="LogoHero"
          />
        </div>
      </div>
      <div className="SegundaSeccion flex flex-col justify-center items-center gap-8 w-full h-svh bg-[url('/images/LogoGif.gif')] bg-no-repeat bg-fixed bg-center">
        <div className="AvatarSec flex flex-col md:flex-row gap-3 justify-around items-center bg-neutral-900/80 rounded-xl w-auto md:w-[50%] h-auto md:h-24 p-5">
          <User
            name="LorKami Dev"
            description="Noob Dev"
            avatarProps={{
              src: "/images/LogoLK.png",
            }}
          />
          <User
            name="LorKami Dev"
            description="Noob Dev"
            avatarProps={{
              src: "/images/LogoLK.png",
            }}
          />
          <User
            name="LorKami Dev"
            description="Noob Dev"
            avatarProps={{
              src: "/images/LogoLK.png",
            }}
          />
        </div>
        <div className="TarjetaFoto flex flex-row justify-around w-full h-auto p-8">
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Kami"
              className="object-cover"
              height={250}
              src="/images/PUMP_IT.png"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Soy nuv</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Ya lo sabemos
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Kami"
              className="object-cover"
              height={250}
              src="/images/LogoLK.png"
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Soy nuv x2</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Ya lo sabemos x3
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Slider
          label="Nivel de epicidad"
          step={0.01}
          maxValue={1}
          minValue={0}
          defaultValue={0.5}
          className="max-w-md"
        />
      </div>
    </NextUIProvider>
  );
}
