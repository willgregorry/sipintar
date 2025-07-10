"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Fredoka } from "next/font/google";

export default function Home() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <div>
      <header className="sticky flex bg-[#F8F4E1] items-center justify-between px-40 [box-shadow:0_4px_4px_2px_rgba(0,0,0,0.25)]">
        <div className="flex item-center gap-2 pt-8 pb-4">
          <Image src={"/icon.png"} width={172} height={65} alt="logo" />
        </div>
      </header>
      <main className="flex bg-[#D4FAFA]  ">
        <div className="pt-12">
          <Image
            className="-mt-20 w-screen"
            src={"/mountains/sun_hills.png"}
            width={1440}
            height={970}
            alt="mountains"
          />
        </div>
        <div className="container flex flex-col gap-[40px] w-[514px] h-[132px] mt-18 -ml-[45%] pt-28 pr-12">
          <p className="text-[#543310] uppercase font-black text-2xl text-center">
            Selamat datang di Sipintar! Aplikasi pembelajaran No.1 di Indonesia!
          </p>
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <Button
              onClick={handleSignUp}
              className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-[340px] cursor-pointer border-b-6 border-b-[#AF8F6F] p-2 active:border-b-3 hover:bg-[#54331099] hover:scale-105"
            >
              Mulai Belajar
            </Button>
            <Button
              onClick={handleSignIn}
              className="bg-white h-14 duration-300 text-xl text-[#543310] font-bold rounded-full w-[340px] cursor-pointer p-2 border-3 border-b-8 border-[#543310] active:border-b-3 hover:scale-105 hover:bg-neutral-100"
            >
              Sudah punya akun
            </Button>
          </div>
        </div>
      </main>
      <section className="h-screen">
        <div className="relative w-full z-50">
          <Image
            className="w-full"
            src="/waves/wave1.png"
            alt="waves"
            width={1440}
            height={181}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="uppercase text-3xl text-center text-white font-black">
              Mengapa belajar bersama kami?
            </p>
          </div>
        </div>
        <div className="relative w-full -mt-8">
          <Image
            src="/waves/wave2.png"
            className="w-full"
            width={1440}
            height={632}
            alt="wave"
          />
          <div className="absolute inset-0 flex items-center justify-center">

          </div>
        </div>
      </section>
    </div>
  );
}
