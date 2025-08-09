import Appbar from "@/components/appbar";
import materiData from "@/data/materi.json";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DetailLevelPage({ params }) {
  const { topic, level } = params;

  const topicData = materiData.find((m) => m.slug_materi === topic);
  const levelData = topicData?.level.find((l) => l.slug_level === level);

  if (!levelData) {
    return notFound();
  }

  return (
    <div className="my-24 px-44">
      <Appbar />

      {/* Judul Materi */}
      <div className="px-4 h-13 bg-[#CAB5A0] rounded-2xl flex gap-4 justify-start items-center">
        <Link href="/beranda/materi">
          <ChevronLeft size={30} color="#543310" />
        </Link>
        <span className="text-xl font-fredoka font-semibold text-accent-theme">
          {topicData.materi} - {levelData.nama}
        </span>
      </div>

      {/* Video Pembelajaran */}
      <div className="my-3 py-8 px-16 bg-white  h-screen">
        <span className="text-4xl font-bold">Video Pembelajaran</span>
        <iframe className="my-8 w-full h-[480px] px-24" width="560" height="315" src={levelData.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      {/* Pengantar */}
      <div className="my-3 py-8 px-16 bg-white  h-auto">
        <span className="text-4xl font-bold">
          Pengantar
        </span>
        <p className="my-8 text-justify">
          {levelData.pengantar}
        </p>
      </div>

      {/* Materi */}
    </div>
  );
}
