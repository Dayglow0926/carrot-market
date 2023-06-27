import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid gap-10 bg-slate-400 px-20 py-20">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mx-auto mt-5 w-2/4 rounded-xl bg-blue-500 p-3 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14"></div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl"></div>
      <div className="rounded-2xl bg-white p-10 shadow-xl"></div>
    </div>
  );
}
