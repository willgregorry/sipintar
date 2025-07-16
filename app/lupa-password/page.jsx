import Navbar from "@/components/navbar";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LupaPassword() {
  return (
    <>
      <Navbar />
      <div className="relative flex gap-[40px] mt-12">
        <div className="absolute">
          <Image
            src={"/mountains/park2.png"}
            width={5760}
            height={3392}
            alt="mountains"
          />
        </div>
        <div className="absolute flex flex-col  w-[35%] ml-180">
          <div className="flex gap-22">
            <div className="-ml-16 pr-16 text-accent-theme">
              <a href="/signin">
                <ChevronLeft size={45} absoluteStrokeWidth />
              </a>
            </div>
            <h1 className="font-semibold font-fredoka text-accent-theme text-center text-4xl">
              Lupa Password?
            </h1>
          </div>
          <p className="mt-8 p-2 font-semibold text-accent-theme text-justify w-auto">
            Email akan dikirimkan untuk memverifikasi akun kamu dan kamu akan
            diarahkan ke halaman untuk mengganti password.
          </p>
          <form
            action=""
            className="flex flex-col gap-6 mx-2 my-8 font-semibold"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">Email</label>
              <input
                className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                type="text"
                placeholder="Email atau Username Anda"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-full cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105"
            >
              Kirim
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
