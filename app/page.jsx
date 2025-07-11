"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { easeInOut, motion } from "motion/react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

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
      <header className="sticky flex bg-[#F8F4E1] items-start justify-between px-40 [box-shadow:0_4px_4px_2px_rgba(0,0,0,0.25)]">
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
          <div className="absolute top-100 left-80">
            <Image
              src="/assets/sipintar.png"
              width={470}
              height={470}
              alt="sipintar"
            />
          </div>
        </div>
        <div className="container flex flex-col gap-[40px] w-[514px] h-[132px] mt-18 -ml-[45%] pt-28 pr-12">
          <p className="text-[#543310] uppercase font-black font-nunito text-2xl text-center">
            Selamat datang di Sipintar! Aplikasi pembelajaran No. 1 di
            Indonesia!
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
            src="/waves/header.png"
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
        <div className="relative w-full z-40 -mt-8">
          <Image
            src="/patterns/light_background.png"
            className="w-screen"
            width={1440}
            height={632}
            alt="wave"
          />
          <div className="absolute inset-0 flex gap-30 items-center justify-center">
            <motion.div
              animate={{ rotate: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <Image
                src="/assets/paper.png"
                alt="paper"
                width={308}
                height={341}
              />
            </motion.div>

            <div className="w-[35%]">
              <div className="flex flex-col gap-8 items-center justify-center">
                <p className="font-black text-white text-6xl text-center">
                  Materi Komplit
                </p>
                <p className="font-semibold text-white text-2xl text-center w-[120%]">
                  Kami menyediakan materi yang lengkap per bagian dilengkapi
                  dengan ringkasan, video, dan notes interaktif lainnya
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full z-30 -mt-22">
          <Image
            src="/patterns/lighter_background.png"
            className="w-screen"
            width={1440}
            height={632}
            alt="wave"
          />
          <div className="absolute inset-0 flex gap-30 items-center justify-center">
            <div className="w-[35%]">
              <div className="flex flex-col gap-8 items-center justify-center">
                <p className="font-black text-white text-6xl text-center">
                  Gamifikasi Pembelajaran
                </p>
                <p className="font-semibold text-white text-2xl text-center w-[120%]">
                  Pembelajaran yang menyenangkan bersama maskot kami dan
                  soal-soal yang menantang
                </p>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <Image
                src="/assets/phone.png"
                alt="paper"
                width={308}
                height={341}
              />
            </motion.div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-30 mt-24">
          <motion.div
            animate={{ rotate: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <Image
              src="/assets/statistic.png"
              alt="paper"
              width={424}
              height={413}
            />
          </motion.div>

          <div className="w-[35%]">
            <div className="flex flex-col gap-8 items-center justify-center">
              <p className="font-black text-[#543310] text-6xl text-center">
                Memotivasi Kamu
              </p>
              <p className="font-semibold text-[#543310] text-2xl text-center w-[120%]">
                Statistik singkat mengenai pembelajaran kamu agar dapat lebih
                berkembang lagi.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute gap-40 mt-28 z-10">
          <div className="flex">
            <Image
              src="/assets/sipintar.png"
              width={950}
              height={950}
              alt="sipintar"
            />
            <Image
              src="/mountains/single_mountain.png"
              width={720}
              height={952}
              alt="single-mountain"
            />
          </div>

          <div className="relative items-center justify-center">
            <Image
              className="w-screen -mt-84 z-40"
              src="/waves/footer.png"
              width={1440}
              height={483}
              alt="footer"
            />
            <div className="flex justify-around -mt-64 gap-40">
              <div className="flex flex-col gap-12">
                <Image
                  src="/assets/white_sipintar.png"
                  width={256}
                  height={76}
                  alt="logo footer"
                />
                <p className="text-white text-xl font-black">
                  ©2025 Sipintar. All Right Reserved
                </p>
              </div>

              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="text-white font-black text-3xl">Ikuti Kami</p>
                <div className="flex gap-[20px]">
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                    <Instagram size={30} absoluteStrokeWidth />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                    <Facebook size={30} absoluteStrokeWidth />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                    <Twitter size={30} absoluteStrokeWidth />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                    <Youtube size={30} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
