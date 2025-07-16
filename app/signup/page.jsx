"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="relative gap-[40px]">
        <Image
          className="w-screen"
          src={"/mountains/park.png"}
          width={5760}
          height={3372}
          alt="park"
        />
        <div className="flex flex-col  w-[35%] -mt-[55%] ml-[33%]">
          <div className="flex gap-5">
            <div className="-ml-22 pr-16 text-accent-theme">
              <a href="/">
                <ChevronLeft size={45} absoluteStrokeWidth />
              </a>
            </div>
            <h1 className="font-semibold font-fredoka text-accent-theme text-center text-4xl">
              Ayo mulai perjalanan Anda!
            </h1>
          </div>
          <form
            action=""
            className="flex flex-col gap-6 mx-2 my-8 font-semibold"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">
                Username
              </label>
              <input
                className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                type="text"
                placeholder="Username Anda"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">
                Email
              </label>
              <input
                className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                type="email"
                placeholder="contoh@gmail.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">
                Password
              </label>
              <div className="relative">
                <input
                  className="h-14 w-full p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password Anda"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-[#5C3B00]"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  className="h-14 w-full p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password Anda"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-[#5C3B00]"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-full cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105"
            >
              Daftar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
