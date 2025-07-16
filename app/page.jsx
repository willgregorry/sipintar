"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Navbar from "@/components/navbar"
import { useState } from "react";

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
      <Navbar />
      <main className="flex bg-[#D4FAFA]  ">
        <div className="pt-12">
          <Image
            className="-mt-20 w-screen"
            src={"/mountains/sun_hills.png"}
            width={1440}
            height={970}
            alt="mountains"
          />
          <div>
            <motion.div animate={{ rotate: [0, 22, 0], y: [0, -11, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-90 left-55">
              <Image src="/assets/divide.png" width={57} height={59} alt="divide" />
            </motion.div>
            <motion.div animate={{ rotate: [0, -10, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-125 left-55 -rotate-30">
              <Image src="/assets/paper.png" width={90} height={82} alt="paper" />
            </motion.div>
            <motion.div animate={{ rotate: [0, 20, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-65 left-90">
              <Image src="/assets/plus.png" width={69} height={69} alt="plus" />
            </motion.div>
            <motion.div animate={{ rotate: [0, 25, 0], y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-105 left-85">
              <Image src="/assets/multiply.png" width={59} height={59} alt="multiply" />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-100 left-120">
              <Image src="/assets/minus.png" width={70} height={70} alt="minus" />
            </motion.div>
            <motion.div animate={{ x: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-70 left-150">
              <Image src="/assets/star.png" width={100} height={100} alt="star" />
            </motion.div>
            <motion.div animate={{ rotate: [0, 20, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }} className="absolute top-100 left-160">
              <Image src="/assets/white_phone.png" width={104} height={111} alt="white phone" />
            </motion.div>
          </div>
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
              className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-[340px] cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105"
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
            <p className="uppercase font-fredoka text-3xl text-center text-white font-semibold">
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
                <p className="font-semibold font-fredoka text-white text-6xl text-center">
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
                <p className="font-semibold font-fredoka text-white text-6xl text-center">
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
        <div className="relative flex items-center justify-center gap-52 mt-24">
          <Image
            src="/assets/statistic.gif"
            alt="paper"
            width={194}
            height={4228}
          />
          <div className="w-[35%]">
            <div className="flex flex-col gap-8 items-center justify-center">
              <p className="font-semibold font-fredoka text-[#543310] text-6xl text-center">
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
            <div className="absolute right-12 top-60 flex flex-col items-center justify-center gap-10 z-50">
              <p className="text-accent-theme text-center text-6xl font-semibold font-fredoka w-[70%]">
                Yuk mulai belajar bersama Sipintar!
              </p>
              <Button
                onClick={handleSignUp}
                className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-[300px] cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105"
              >
                Mulai Belajar
              </Button>
            </div>
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
                <p className="text-white text-xl font-semibold font-fredoka">
                  ©2025 Sipintar. All Right Reserved
                </p>
              </div>

              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="text-white font-semibold font-fredoka text-3xl">Ikuti Kami</p>
                <div className="flex gap-[20px]">
                  <a
                    href=""
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    <Instagram size={30} absoluteStrokeWidth />
                  </a>
                  <a
                    href=""
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    <Facebook size={30} absoluteStrokeWidth />
                  </a>
                  <a
                    href=""
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    <Twitter size={30} absoluteStrokeWidth />
                  </a>
                  <a
                    href=""
                    className="text-white hover:opacity-80 transition-opacity"
                  >
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
