"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/authContext";
import { useState } from "react";
import { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const { user } = useAuth();
  const pathname = usePathname();
  const jlhHati = user?.stats?.hati ?? 0;

  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (jlhHati >= 5) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [jlhHati]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <header className="fixed w-full z-50 flex bg-[#F8F4E1] items-center justify-between px-40 [box-shadow:0_4px_4px_2px_rgba(0,0,0,0.25)]">
      <div className="flex item-center gap-2 pt-2 pb-2">
        <Image src={"/icon.png"} width={172} height={65} alt="logo" />
      </div>
      <div>
        {user && (
          <div className="flex items-center gap-8">
            {/* Hati */}
            {pathname === "/beranda" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center">
                    <Image
                      className=""
                      src="/statistics/hati.png"
                      alt="hati"
                      width={50}
                      height={50}
                    />
                    <span className="text-accent-theme font-black text-2xl">
                      {user.stats.hati}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="w-90 h-auto">
                  <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <div className="flex items-center justify-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src="/statistics/hati.png"
                          alt="hati"
                          className={`w-10 h-8 ${
                            index < jlhHati ? "" : "filter grayscale"
                          }`}
                        />
                      ))}
                    </div>
                    <div>
                      {jlhHati >= 5 ? (
                        <span className="font-bold text-lg">
                          Hati kamu sudah terisi penuh, yuk kerjakan beberapa
                          soal!
                        </span>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <span className="font-bold text-xl">
                            {formatTime(timeLeft)}
                          </span>
                          <span className="text-[16px] font-semibold">Sampai satu hati selanjutnya terisi! Tunggu atau tuntaskan level untuk mengisi hati!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}

            {/* Streak */}
            {pathname === "/beranda" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/statistics/streak.png"
                      alt="streak"
                      width={50}
                      height={50}
                    />
                    <span className="text-accent-theme font-black text-2xl">
                      {user.stats.streak}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="w-60 h-auto">
                  <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src="/statistics/streak.png"
                        alt="streak"
                        width={50}
                        height={50}
                      />
                      <span className="font-bold text-2xl">
                        {user.stats.streak}
                      </span>
                    </div>
                    <span className="font-bold text-lg">Streak kamu saat ini</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}

            <Link href="/beranda/profile">
              <img
                src={
                  user.photo_base64
                    ? `data:image/png;base64,${user.photo_base64}`
                    : "/avatar.jpg"
                }
                alt="avatar"
                className="w-12 h-12 rounded-full border-accent-theme border-2"
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
