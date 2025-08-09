import Appbar from "@/components/appbar";
import materiData from "@/data/materi.json";
import LevelItem from "@/components/levelItem";

export default function Beranda() {
  const materi = materiData[0];

  return (
    <div>
      <div className="px-44 mt-24 h-1000">
        <Appbar />

        {/* Header Materi */}
        <div className="bg-accent-theme text-white p-4 rounded-lg flex justify-between items-center w-[65%]">
          <div className="w-[40%] px-4 py-2">
            <h1 className="text-2xl font-bold">{materi.materi}</h1>
            <p className="text-sm">{materi.deskripsi}</p>
          </div>
          <button className="bg-white text-black px-3 py-1 rounded">
            Akses Materi
          </button>
        </div>

        {/* Level List */}
        <div className="mt-6 grid grid-cols-3 gap-4 justify-items-center">
          {materi.level.map((lvl, i) => (
            <LevelItem key={i} nama={lvl.nama} status={lvl.status} />
          ))}
        </div>
      </div>
    </div>
  );
}
