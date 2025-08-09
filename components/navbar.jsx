"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/authContext";

export default function Navbar() {
  const { user } = useAuth();
  const pathname = usePathname();

  // if (window.location.usePathname)

  return (
    <header className="sticky flex bg-[#F8F4E1] items-center justify-between px-40 [box-shadow:0_4px_4px_2px_rgba(0,0,0,0.25)]">
      <div className="flex item-center gap-2 pt-2 pb-2">
        <Image src={"/icon.png"} width={172} height={65} alt="logo" />
      </div>
      <div>
        {user && (
          <div className="flex items-center gap-4">
            {pathname === "/beranda" && (
              <div className="bg-pink-200 px-3 py-1 rounded-full text-sm">
                ❤️ {user.stats.hati} hearts
              </div>
            )}

            {pathname === "/beranda" && (
              <div className="bg-yellow-200 px-3 py-1 rounded-full text-sm">
                🔥 {user.stats.streak} days
              </div>
            )}

            <Link href="/beranda/profile">
              <img
                src={
                  user.photo_base64
                    ? `data:image/png;base64,${user.photo_base64}`
                    : "/avatar.jpg"
                }
                alt="avatar"
                className="w-10 h-10 rounded-full border"
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
