import React from "react";
import Link from "next/link";
import { BsController, BsBox2HeartFill } from "react-icons/bs";
import { MdDoneAll } from "react-icons/md";
import { cn } from "@/lib/utils";

export default function Sidebar({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 pl-2 pt-4 text-xl text-slate-100",
        className
      )}
    >
      <button className=" w-max text-xl hover:text-amber-400">
        <span className="flex">
          <BsController className="mb-[2px] mr-4 inline text-3xl" /> Want to
          Play
        </span>
      </button>
      <button className=" w-max text-xl hover:text-amber-400">
        <span className="flex">
          <BsBox2HeartFill className="ml-[6px] mr-5 mt-[4px] inline" /> Owned
          Games
        </span>
      </button>
      <button className=" w-max text-xl hover:text-amber-400">
        <span className="flex">
          <MdDoneAll className="ml-[6px] mr-5 mt-[4px] inline" />
          Completed
        </span>
      </button>
    </div>
  );
}
