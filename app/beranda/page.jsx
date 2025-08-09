'use client'

import Appbar from "@/components/appbar";
import materiData from "@/data/materi.json";
import LevelItem from "@/components/levelItem";
import Image from "next/image";
import Link from "next/link";
import Roadmap from "@/components/roadmap";
import { redirect } from "next/navigation";

export default function Beranda() {
  const materi = materiData[0];
  const limit = materiData[1];
  const turunan = materiData[2];
  const integral = materiData[3];

  return (
    <div>
      <div className="px-44 my-24 h-auto">
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
          <button onClick={() => redirect("/beranda/materi")} className="flex leading-none items-center bg-[#AF8F6F] duration-300 h-auto text-xl text-white font-bold rounded-md w-40 cursor-pointer border-3 border-b-8 border-[#CAB5A0] border-b-[#CAB5A0] p-2 active:border-b-4 hover:bg-[#AF8F6F] hover:scale-105">
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
            const topicSlug = materi.slug_materi;
            const levelSlug = lvl.slug_level;
            const isLocked = lvl.status === "locked";
            const isEven = i % 2 === 0;

            const wrapperClassName = `
              relative 
              ${isEven ? "pr-[70%]" : "pl-[0%]"} 
              ${isLocked ? "opacity-50" : "transition-transform duration-300"}
            `;

            return (
              <div key={lvl.id} className={wrapperClassName}>
                {isLocked ? (
                  <LevelItem nama={lvl.nama} status={lvl.status} />
                ) : (
                  <Link
                    href={`/beranda/materi/${topicSlug}/${levelSlug}`}
                    legacyBehavior
                  >
                    <a className="cursor-pointer">
                      <LevelItem nama={lvl.nama} status={lvl.status} />
                    </a>
                  </Link>
                )}
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
            const isLocked = lvl.status === "locked";
            const isEven = i % 2 === 0;

            const wrapperClassName = `
              relative 
              ${isEven ? "pr-[70%]" : "pl-[0%]"} 
              ${isLocked ? "opacity-50" : "transition-transform duration-300"}
            `;

            return (
              <div key={lvl.id} className={wrapperClassName}>
                {isLocked ? (
                  <LevelItem nama={lvl.nama} status={lvl.status} />
                ) : (
                  <Link
                    href={`/beranda` /*`/materi/${lvl.slug}`*/}
                    legacyBehavior
                  >
                    <a className="cursor-pointer">
                      <LevelItem nama={lvl.nama} status={lvl.status} />
                    </a>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Turunan */}
        {/* Header Materi */}
        <div className="bg-accent-theme mt-20 text-white p-4 rounded-lg flex justify-between items-center w-[65%]">
          <div className="w-[40%] space-y-2 px-4 py-2">
            <h1 className="text-[28px] font-bold">{turunan.materi}</h1>
            <p className="text-md font-light">{turunan.deskripsi}</p>
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
          {turunan.level.map((lvl, i) => {
            const isLocked = lvl.status === "locked";
            const isEven = i % 2 === 0;

            const wrapperClassName = `
              relative 
              ${isEven ? "pr-[70%]" : "pl-[0%]"} 
              ${isLocked ? "opacity-50" : "transition-transform duration-300"}
            `;

            return (
              <div key={lvl.id} className={wrapperClassName}>
                {isLocked ? (
                  <LevelItem nama={lvl.nama} status={lvl.status} />
                ) : (
                  <Link
                    href={`/beranda` /*`/materi/${lvl.slug}`*/}
                    legacyBehavior
                  >
                    <a className="cursor-pointer">
                      <LevelItem nama={lvl.nama} status={lvl.status} />
                    </a>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Integral */}
        {/* Header Materi */}
        <div className="bg-accent-theme mt-20 text-white p-4 rounded-lg flex justify-between items-center w-[65%]">
          <div className="w-[40%] space-y-2 px-4 py-2">
            <h1 className="text-[28px] font-bold">{integral.materi}</h1>
            <p className="text-md font-light">{integral.deskripsi}</p>
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
          {integral.level.map((lvl, i) => {
            const isLocked = lvl.status === "locked";
            const isEven = i % 2 === 0;

            const wrapperClassName = `
              relative 
              ${isEven ? "pr-[70%]" : "pl-[0%]"} 
              ${isLocked ? "opacity-50" : "transition-transform duration-300"}
            `;

            return (
              <div key={lvl.id} className={wrapperClassName}>
                {isLocked ? (
                  <LevelItem nama={lvl.nama} status={lvl.status} />
                ) : (
                  <Link
                    href={`/beranda` /*`/materi/${lvl.slug}`*/}
                    legacyBehavior
                  >
                    <a className="cursor-pointer">
                      <LevelItem nama={lvl.nama} status={lvl.status} />
                    </a>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
