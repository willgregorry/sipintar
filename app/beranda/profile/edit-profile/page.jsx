import Link from "next/link";
import { ChevronLeft, Pencil, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EditProfile() {
  const editSuccess = () => {
    return (
      <div className="flex gap-6 w-90 h-12 rounded-xl justify-center items-center bg-[#72AF6F]">
        <Info color="white" size={25} />
        <span className="text-white text-lg font-bold">
          Perubahan berhasil dilakukan
        </span>
      </div>
    );
  };

  const editFailed = () => {
    return (
      <div className="flex gap-6 w-70 h-12 rounded-xl justify-center items-center bg-[#9B3032]">
        <Info color="white" size={25} />
        <span className="text-white text-lg font-bold">
          Perubahan dibatalkan
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="container flex flex-col gap-12 mt-16 mb-28 mx-40 w-auto h-screen">
        <div className="flex gap-4 items-center">
          <Link href="/beranda/profile">
            <ChevronLeft size={40} strokeWidth={1} />
          </Link>
          <h1 className="uppercase font-fredoka font-semibold text-accent-theme text-4xl">
            Edit Profile
          </h1>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <Avatar className="w-50 h-50">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex w-auto gap-8">
            <Button className="bg-[#543310] duration-300 h-14 text-sm text-white font-bold rounded-full w-32 cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105">
              Ubah Foto
            </Button>
            <Button className="bg-[#543310] duration-300 h-14 text-sm text-white font-bold rounded-full w-32 cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105">
              Hapus Foto
            </Button>
          </div>
          <div className="form flex flex-col w-120">
            <form action="" className="flex flex-col gap-6">
              <div>
                <label htmlFor="" className="text-accent-theme font-bold">
                  Nama
                </label>
                <div className="relative">
                  <input
                    className="h-14 w-120 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                    type={"text"}
                  />
                  <Pencil
                    className="absolute left-[92%] bottom-4"
                    color="#543310"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-accent-theme font-bold">
                  Username
                </label>
                <div className="relative">
                  <input
                    className="h-14 w-120 p-4 rounded-full bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                    type={"text"}
                  />
                  <Pencil
                    className="absolute left-[92%] bottom-4"
                    color="#543310"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-accent-theme font-bold">
                  Deskripsi
                </label>
                <div className="relative">
                  <input
                    className="h-38 w-120 p-4 rounded-xl bg-[#AF8F6F] border-3 opacity-50 border-[#543310] focus:border-[#39240d] focus:opacity-70 focus:outline-none placeholder:text-[#54331090]"
                    type={"text"}
                  />
                  <Pencil
                    className="absolute left-[92%] bottom-[70%]"
                    color="#543310"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </form>
            <div className="flex mt-8 mb-40 justify-around w-full gap-8">
              <Button className="bg-[#543310] duration-300 h-14 text-sm text-white font-bold rounded-full w-[45%] cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105">
                Batalkan Perubahan
              </Button>
              <Button className="bg-[#543310] duration-300 h-14 text-sm text-white font-bold rounded-full w-[45%] cursor-pointer border-3 border-b-8 border-[#AF8F6F] border-b-[#AF8F6F] p-2 active:border-b-4 hover:bg-[#543310] hover:scale-105">
                Simpan Profil
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
