import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-xl mb-6"> Redux Toolkit counter</h1>
      <div className="flex gap-4 items-center justify-center">
        <button className="bg-green-500 px-4 py-2 text-white border rounded-md">
          Increment
        </button>
        <span>0</span>
        <button className="bg-red-500 px-4 py-2 text-white border rounded-md">
          Decrement
        </button>
      </div>
    </div>
  );
}
