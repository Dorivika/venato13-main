"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";

function DrawerSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-white lg:hidden">
          <HiMenu className="text-4xl" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5 bg-zinc-900 sm:w-[300px]">
        <SheetHeader>
          <Link
            href="/"
            className="text-left text-4xl font-bold text-yellow-500"
          >
            Venato
          </Link>
        </SheetHeader>
        <Sidebar className="" />
      </SheetContent>
    </Sheet>
  );
}

export default DrawerSidebar;
