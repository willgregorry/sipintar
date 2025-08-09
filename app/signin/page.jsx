'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/authContext";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      router.push("/beranda");
    } else {
      setError("Email atau password salah!");
    }
  }

  return (
    <>
      <div className="relative flex gap-[40px] mt-12">
        <div className="absolute">
          <Image
            src={"/mountains/park2.png"}
            width={5760}
            height={3392}
            alt="mountains"
          />
        </div>
        <div className="absolute flex flex-col left-180 w-[35%]">
          <div className="flex gap-5">
            <div className="-ml-16 pr-16 text-accent-theme">
              <a href="/">
                <ChevronLeft size={45} absoluteStrokeWidth />
              </a>
            </div>
            <h1 className="font-semibold font-fredoka text-accent-theme text-center text-4xl">
              Selamat datang kembali!
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mx-2 my-8 font-semibold"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">
                Email / Username
              </label>
              <input
                className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                type="email"
                placeholder="Email atau Username Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-accent-theme font-bold">
                Password
              </label>
              <div className="relative">
                <input
                  className="h-14 w-full p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password Anda"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <Button
              type="submit"
              className="bg-[#543310] duration-300 h-14 text-xl text-white font-bold rounded-full w-full cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105"
            >
              Log In
            </Button>

            <Link
              href="/lupa-password"
              className="underline text-accent-theme font-bold decoration-0 decoration-gray-500 m-2 text-lg"
            >
              Lupa Password?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
