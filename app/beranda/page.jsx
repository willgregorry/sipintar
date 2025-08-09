import Appbar from "@/components/appbar";
import materiData from "@/data/materi.json";
import LevelItem from "@/components/levelItem";
import Image from "next/image";
import Roadmap from "@/components/roadmap";

export default function Beranda() {
  const materi = materiData[0];
  const limit = materiData[1];

  return (
    <div>
      <div className="px-44 mt-24 h-1000">
        <Appbar />

        {/* Roadmap */}
        <div className="fixed top-40 left-265">
          <Roadmap progress={0} correct={1} incorrect={1} />
        </div>

        {/* Persamaan Linear */}
        {/* Header Materi */}
        <div className="bg-accent-theme text-white p-4 rounded-lg flex justify-between items-center w-[65%]">
          <div className="w-[40%] space-y-2 px-4 py-2">
            <h1 className="text-[28px] font-bold">{materi.materi}</h1>
            <p className="text-md font-light">{materi.deskripsi}</p>
          </div>
          <button className="flex leading-none items-center bg-[#AF8F6F] duration-300 h-auto text-xl text-white font-bold rounded-md w-40 cursor-pointer border-3 border-b-8 border-[#CAB5A0] border-b-[#CAB5A0] p-2 active:border-b-4 hover:bg-[#AF8F6F] hover:scale-105">
            <Image
              src="/assets/paper.png"
              alt="materi"
              width={50}
              height={60}
            />
            <p className="text-accent-theme">Akses Materi</p>
          </button>
        </div>

        {/* Level List */}
        <div className="space-y-10 mt-24 z-0">
          {materi.level.map((lvl, i) => {
            const isEven = i % 2 === 0;
            const isLastItem = i === materi.level.length - 1;

            return (
              <div
                key={lvl.nama}
                className={`
                    relative z-0
                    ${isEven ? "pr-[70%]" : "pl-[0%]"}
                  `}
              >
                <LevelItem nama={lvl.nama} status={lvl.status} />
              </div>
            );
          })}
        </div>



        {/* Limit */}
        {/* Header Materi */}
        <div className="bg-accent-theme mt-20 text-white p-4 rounded-lg flex justify-between items-center w-[65%]">
          <div className="w-[40%] space-y-2 px-4 py-2">
            <h1 className="text-[28px] font-bold">{limit.materi}</h1>
            <p className="text-md font-light">{limit.deskripsi}</p>
          </div>
          <button className="flex leading-none items-center bg-[#AF8F6F] duration-300 h-auto text-xl text-white font-bold rounded-md w-40 cursor-pointer border-3 border-b-8 border-[#CAB5A0] border-b-[#CAB5A0] p-2 active:border-b-4 hover:bg-[#AF8F6F] hover:scale-105">
            <Image
              src="/assets/paper.png"
              alt="materi"
              width={50}
              height={60}
            />
            <p className="text-accent-theme">Akses Materi</p>
          </button>
        </div>

        {/* Level List */}
        <div className="space-y-10 mt-24 z-0">
          {limit.level.map((lvl, i) => {
            const isEven = i % 2 === 0;
            const isLastItem = i === limit.level.length - 1;

            return (
              <div
                key={lvl.nama}
                className={`
                    relative z-0
                    ${isEven ? "pr-[70%]" : "pl-[0%]"}
                  `}
              >
                <LevelItem nama={lvl.nama} status={lvl.status} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
