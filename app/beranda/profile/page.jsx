'use client'

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import profileData from '@/data/profile.json';

export default function Profile() {
  const router = useRouter();
  const user = profileData[0];
  
  const handleEdit = () => {
    router.push('/beranda/profile/edit-profile');
  }

  return (
    <>
      <div className="container flex flex-col gap-12 mt-16 mb-28 mx-40 w-auto h-screen">
        <div className="flex gap-4 items-center">
          <Link href="/beranda">
            <ChevronLeft size={40} strokeWidth={1} />          
          </Link>
          <h1 className="uppercase font-fredoka font-semibold text-accent-theme text-4xl">
            Profile
          </h1>
        </div>
        <div className="container gap-12 flex w-full">
          <Avatar className="w-50 h-50">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center gap-2 w-[60%]">
            <p className="text-4xl font-bold text-accent-theme">
              { user.name }
            </p>
            <p className="text-md font-semibold text-accent-theme">@{user.username}</p>
            <p className="text-accent-theme font-semibold">
              { user.description }
            </p>
            <p className="text-lg font-bold text-accent-theme">Bergabung sejak {user.joined_at}</p>
          </div>
          <div className="flex items-end translate-y-8">
            <Button
              onClick={handleEdit}
              className="bg-[#543310] duration-300 h-14 text-sm text-white font-bold rounded-full w-44 cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105"
            >
              Edit Profile
            </Button>
          </div>
        </div>
        <hr className="border-1 border-accent-theme"/>
        <div className="flex flex-col w-full h-auto gap-8">
            <span className="text-accent-theme font-black text-4xl">Statistik</span>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-6">
                <div className="flex items-center pl-16 gap-16 h-28 rounded-xl bg-[#CAB5A0]">
                    <Image className="w-20 h-20" src='/statistics/waktu_belajar.png' width={252} height={245} alt="waktu_belajar" />
                    <div className="flex flex-col gap-2 justify-center">
                        <p className="uppercase text-xl font-semibold text-accent-theme">Lama Belajar</p>
                        <p className="text-2xl font-bold text-accent-theme">{user.stats.lama_belajar}</p>
                    </div>
                </div>
                <div className="flex items-center pl-16 gap-16 h-28 rounded-xl bg-[#CAB5A0]">
                    <Image className="w-20 h-20" src='/statistics/paper.png' width={252} height={245} alt="waktu_belajar" />
                    <div className="flex flex-col gap-2 justify-center">
                        <p className="uppercase text-xl font-semibold text-accent-theme">Soal Dikerjakan</p>
                        <p className="text-2xl font-bold text-accent-theme">{user.stats.soal_dikerjakan}</p>
                    </div>
                </div>
                <div className="flex items-center pl-16 gap-16 h-28 rounded-xl bg-[#CAB5A0]">
                    <Image className="w-20 h-20" src='/statistics/streak.png' width={252} height={245} alt="waktu_belajar" />
                    <div className="flex flex-col gap-2 justify-center">
                        <p className="uppercase text-xl font-semibold text-accent-theme">Streak</p>
                        <p className="text-2xl font-bold text-accent-theme">{user.stats.streak}</p>
                    </div>
                </div>
                <div className="flex items-center pl-16 gap-16 h-28 rounded-xl bg-[#CAB5A0]">
                    <Image className="w-20 h-20" src='/statistics/percentage.png' width={252} height={245} alt="waktu_belajar" />
                    <div className="flex flex-col gap-2 justify-center">
                        <p className="uppercase text-xl font-semibold text-accent-theme">Penyelesaian</p>
                        <p className="text-2xl font-bold text-accent-theme">{user.stats.penyelesaian}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
