import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LupaPassword() {
    return(
        <>
            <Navbar />
      <div className="flex gap-[40px]">
        <Image src={"/mountain.png"} width={766} height={848} alt="mountains" />
        <div className="flex flex-col  w-[30%]">
          <h1 className="font-bold text-center text-4xl">
            Lupa Password?
          </h1>
          <p className="mt-8 font-semibold text-justify w-auto">Email akan dikirimkan untuk memverifikasi akun kamu dan kamu akan diarahkan ke halaman untuk mengganti password.</p>
          <form
            action=""
            className="flex flex-col gap-6 mx-2 my-8 font-semibold"
          >
            <div className="flex flex-col">
              <label htmlFor="">Email / Username</label>
              <input
                className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                type="text"
                placeholder="Email atau Username Anda"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-full cursor-pointer border-b-6 border-b-[#AF8F6F] p-2 active:border-b-3 hover:bg-[#54331099] hover:scale-105"
            >
              Kirim
            </Button>

          </form>
        </div>
      </div>
        </>
    );
}