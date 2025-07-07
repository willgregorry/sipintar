import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="sticky flex items-center justify-between px-40">
        <div className="flex item-center gap-2 pt-8 pb-4">
          <Image src={"/icon.png"} width={172} height={65} alt="logo" />
        </div>
      </header>
      <main className="flex gap-4">
        <div className="pt-12">
          <Image
            src={"/mountains.png"}
            width={900}
            height={707}
            alt="mountains"
          />
        </div>
        <div className="container flex flex-col gap-[40px] w-[514px] h-[132px] px-12">
          <p className="text-[#543310] font-bold text-2xl text-center">
            Selamat datang di Sipintar, website penyedia pendidikan terbaik
            se-Indonesia!
          </p>
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <Button className="bg-[#543310] text-md text-white font-bold rounded-full w-[300px] cursor-pointer p-2 hover:bg-[#54331099]">
              Mulai Belajar
            </Button>
            <Button className="bg-white text-md text-[#543310] font-bold rounded-full w-[300px] cursor-pointer p-2 border-2 border-[#543310] hover:bg-neutral-100">
              Sudah punya akun
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
