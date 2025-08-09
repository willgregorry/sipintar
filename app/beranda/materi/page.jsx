import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Beranda() {
  const materi = ["Persamaan Linear", "Limit", "Turunan", "Integral"];

  return (
    <div>
      {/* Appbar */}
      <div className="mt-24 px-44 h-screen">
        <div className="fixed w-[77%] space-x-2 top-20 bg-[#AF8F6F] h-12 mt-2 rounded-2xl">
          <div className="flex justify-around items-center my-2 -translate-y-0.5">
            <div>
              <Link
                href="/beranda"
                className="flex cursor-pointer gap-2 items-center justify-center"
              >
                <Image
                  className="w-8 h-6"
                  src="/assets/home.png"
                  alt="home"
                  width={29}
                  height={24}
                />
                <span className="text-white text-lg font-semibold">
                  Beranda
                </span>
              </Link>
            </div>
            <div className="flex cursor-pointer rounded-full gap-2 items-center justify-center w-36 h-9 bg-[#74512D] translate-x-5.5">
              <Image
                src="/assets/paper.png"
                alt="materi"
                width={29}
                height={24}
              />
              <span className="text-white text-lg font-semibold">Materi</span>
            </div>
          </div>
        </div>

        {/* Materi-materi */}
        <div className="grid grid-cols-2 h-68 gap-y-4 gap-x-8">
          <Link href="">
            <div className="bg-[#CAB5A0] px-8 h-full rounded-2xl flex gap-4 justify-start items-center cursor-pointer">
              <div className="flex justify-evenly items-center gap-8">
                <Image src="/materi/linear.png" alt="linear" width={90} height={90}/>
                <span className="text-accent-theme font-bold text-3xl font-fredoka">
                  {materi[0]}
                </span>
                <ChevronRight className="translate-x-16" size={60} color="#543310" strokeWidth={1} />
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="bg-[#CAB5A0] px-8 h-full rounded-2xl flex gap-4 justify-start items-center cursor-pointer">
              <div className="flex justify-center items-center gap-8">
                <Image src="/materi/linear.png" alt="linear" width={90} height={90}/>
                <span className="text-accent-theme font-bold text-3xl font-fredoka">
                  {materi[1]}
                </span>
                <ChevronRight className="translate-x-60" size={60} color="#543310" strokeWidth={1} />
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="bg-[#CAB5A0] px-8 h-full rounded-2xl flex gap-4 justify-start items-center cursor-pointer">
              <div className="flex justify-evenly items-center gap-8">
                <Image src="/materi/linear.png" alt="linear" width={90} height={90}/>
                <span className="text-accent-theme font-bold text-3xl font-fredoka">
                  {materi[2]}
                </span>
                <ChevronRight className="translate-x-49" size={60} color="#543310" strokeWidth={1} />
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="bg-[#CAB5A0] px-8 h-full rounded-2xl flex gap-4 justify-start items-center cursor-pointer">
              <div className="flex justify-evenly items-center gap-8">
                <Image src="/materi/linear.png" alt="linear" width={90} height={90}/>
                <span className="text-accent-theme font-bold text-3xl font-fredoka">
                  {materi[3]}
                </span>
                <ChevronRight className="translate-x-50" size={60} color="#543310" strokeWidth={1} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
