import Navbar from "@/components/navbar";
import Image from "next/image";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div>
        <Image src={"/mountains.png"} width={900} height={707} alt="mountains" />
        <div className="flex flex-col ">
            <h1>Ayo mulai perjalananmu!</h1>
        </div>
      </div>
    </div>
  );
}
