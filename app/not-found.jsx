"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react";

export default function SignUp() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
    
  return (
    <div>
      <Navbar />
      <div className="relative gap-[40px]">
        <Image className="w-screen" src={"/mountains/park.png"} width={5760} height={3372} alt="park" />
        <div className="flex flex-col justify-center items-center gap-4 w-[35%] -mt-[55%] ml-[33%]">
          <h1 className="uppercase text-accent-theme text-6xl font-black">Oops!</h1>
          <h2 className="uppercase text-accent-theme text-4xl font-black">404 - Page not found</h2>
          <p className="text-xl text-accent-theme py-4">Halaman yang kamu cari tidak ditemukan!</p>
          <Button onClick={handleBack} className="bg-[#543310] duration-300 h-14 text-white rounded-full w-[50%] cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
}
