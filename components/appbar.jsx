'use client'

import { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Appbar() {
    const [menu, setMenu] = useState(true);

    const handleMenu = (clicked) => {
        if (clicked === "beranda") {
            setMenu(false);
            redirect("/beranda/materi");
        } else {
            setMenu(true);
            redirect("/beranda");
        }
    };

    return(
        <>
            {
                menu && (
                    <div className="fixed w-[77%] space-x-2 top-20 bg-[#AF8F6F] h-12 mt-2 rounded-2xl">
                        <div className="flex justify-around items-center my-2 -translate-y-0.5">
                            <div onClick={() => handleMenu("/beranda/materi")} className="flex cursor-pointer rounded-full gap-2 items-center justify-center w-36 h-9 bg-[#74512D] -translate-x-5.5">
                                <Image className="w-8 h-6" src="/assets/home2.png" alt="home" width={29} height={24}/>
                                <span className="text-white text-lg font-semibold">Beranda</span>
                            </div>
                            <div onClick={() => handleMenu("beranda")} className="flex cursor-pointer gap-2 items-center justify-center">
                                <Image src="/assets/paper.png" alt="materi" width={29} height={24}/>
                                <span className="text-white text-lg font-semibold">Materi</span>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                !menu && (
                    <div className="fixed w-[77%] space-x-2 top-20 bg-[#AF8F6F] h-12 mt-2 rounded-2xl">
                        <div className="flex justify-around items-center my-2 -translate-y-0.5">
                            <div onClick={() => handleMenu("materi")} className="flex cursor-pointer gap-2 items-center justify-center">
                                <Image className="w-8 h-6" src="/assets/home.png" alt="home" width={29} height={24}/>
                                <span className="text-white text-lg font-semibold">Beranda</span>
                            </div>
                            <div onClick={() => handleMenu("beranda")} className="flex cursor-pointer rounded-full gap-2 items-center justify-center w-36 h-9 bg-[#74512D] translate-x-5.5">
                                <Image src="/assets/paper.png" alt="materi" width={29} height={24}/>
                                <span className="text-white text-lg font-semibold">Materi</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};