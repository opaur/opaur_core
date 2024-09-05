"use client";
import Footer from "@/components/Footer";
import HeaderComp from "@/components/Headerc";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col ">
    <HeaderComp/>
    <div className="flex flex-col items-center justify-center h-[76vh] md:h-[78vh] md:h-[80vh] bg-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-5xl">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-600 animate-bounce py-2">404</h1>
      <h2 className="text-2xl mt-4 text-gray-800">Page not Found</h2>
    </div>
    
    <div className="flex flex-col items-center justify-center text-center p-2">
      <Image
        width={400}
        height={200}
        src={"/images/illustration/Illust.png"}
        alt="Image"
        priority
      />
    </div>
  </div>
</div>

    </div>
  );
}