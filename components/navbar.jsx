import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky flex bg-[#F8F4E1] items-start justify-between px-40 [box-shadow:0_4px_4px_2px_rgba(0,0,0,0.25)]">
      <div className="flex item-center gap-2 pt-2 pb-2">
        <Image src={"/icon.png"} width={172} height={65} alt="logo" />
      </div>
    </header>
  );
}
