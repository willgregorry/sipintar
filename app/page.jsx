'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleSignIn = () => {
    router.push("/signin")
  };

  return (
    <div>
      <Navbar />
      <main className="flex">
        <div className="pt-12">
          <Image
            src={"/mountains.png"}
            width={1001}
            height={707}
            alt="mountains"
          />
        </div>
        <div className="container flex flex-col gap-[40px] w-[514px] h-[132px] -ml-32 pt-8 pr-12">
          <p className="text-[#543310] font-bold text-2xl text-center w">
            Selamat datang di Sipintar, website penyedia pendidikan terbaik
            se-Indonesia!
          </p>
          <div className="flex flex-col justify-center items-center gap-[40px]">
            <Button onClick={handleSignUp} className="bg-[#543310] h-12 text-lg text-white font-bold rounded-full w-[300px] cursor-pointer p-2 hover:bg-[#54331099]">
              Mulai Belajar
            </Button>
            <Button onClick={handleSignIn} className="bg-white h-12 text-lg text-[#543310] font-bold rounded-full w-[300px] cursor-pointer p-2 border-2 border-[#543310] hover:bg-neutral-100">
              Sudah punya akun
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
