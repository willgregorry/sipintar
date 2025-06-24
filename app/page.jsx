import Image from "next/image";
import Link from "next/link";
import { 
  House,
  Info,
  Users,
  CircleQuestionMark
} from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="sticky flex items-center justify-between border-b-2 px-8">
        <div className="flex item-center gap-2 py-4">
          <Image 
            src={"/ecosort_logo.png"}
            width={190}
            height={150}
            alt="ecosort logo"
          />
          <div>
            <p className="font-semibold pt-2">EcoSort</p>
            <p className="text-sm text-slate-400">Sort, Collect, Earn.</p>
          </div>
        </div>
        <ul className="flex gap-16 pr-[16em]">
          <Link href="" className="flex gap-2">
            <House width={15} />
            Home
          </Link>
          <Link href="" className="flex gap-2">
            <Users width={15} />
            About Us
          </Link>
          <Link href="" className="flex gap-2">
            <Info width={15} />
            Services
          </Link>
          <Link href="" className="flex gap-2">
            <CircleQuestionMark width={15} />
            FAQs
          </Link>
        </ul>
        <Link href="" className="pr-4">
          Login
        </Link>
      </header>
    </>
  );
}
