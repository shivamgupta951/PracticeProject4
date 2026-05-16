'use client'
// Inside ./src/app/page.tsx
import Image from "next/image";
import { decrement, increment } from "./lib/CounterSlice";
// Import the updated lowercase hooks
import { useAppDispatch, useAppSelector } from "./lib/hooks";

export default function Home() {
  // Call the lowercase hooks
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.Counter.count);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-xl mb-6">Redux Toolkit counter</h1>
      <div className="flex gap-4 items-center justify-center">
        <button
          className="bg-green-500 px-4 py-2 cursor-pointer text-white border rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-red-500 px-4 py-2 cursor-pointer text-white border rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
