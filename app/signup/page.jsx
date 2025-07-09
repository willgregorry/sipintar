import Navbar from "@/components/navbar";
import Image from "next/image";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Image src={"/mountain.png"} width={766} height={848} alt="mountains" />
        <div className="flex flex-col  w-[35%]">
            <h1 className="font-bold text-center text-4xl">Ayo mulai perjalanan Anda!</h1>
            <form action="" className="flex flex-col gap-4 mx-2 my-8 font-semibold">
              <div className="flex flex-col">
                <label htmlFor="">Username</label>
                <input className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 border-[#543310] focus:border-red-500 placeholder:text-[#54331090]" type="text" placeholder="Your username"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 border-[#543310] focus:border-red-500 placeholder:text-[#54331090]" type="email" placeholder="example@gmail.com"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 border-[#543310] focus:border-red-500 placeholder:text-[#54331090]" type="password" placeholder="Your password"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Konfirmasi Password</label>
                <input className="h-14 p-4 rounded-full bg-[#AF8F6F] border-3 border-[#543310] focus:border-red-500 placeholder:text-[#54331090]" type="password" placeholder="Your password"/>
              </div>

            </form>
        </div>
      </div>
    </div>
  );
}
