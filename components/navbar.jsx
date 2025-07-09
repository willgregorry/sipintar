import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky flex items-center justify-between px-40">
      <div className="flex item-center gap-2 pt-8 pb-4">
        <Image src={"/icon.png"} width={172} height={65} alt="logo" />
      </div>
    </header>
  );
}
