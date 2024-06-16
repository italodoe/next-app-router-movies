"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <header className=" h-12 bg-zinc-700 text-zinc-100 flex flex-row p-4 items-center">
      <Link href="/">
        <div id="main_logo" className="text-xl font-black ">
          Movies!
        </div>
      </Link>
      <div className="ml-2">
        <Button
          variant="link"
          size={"default"}
          className="text-zinc-400 hover:text-zinc-100"
          onClick={()=> router.push("/genres")}
        >
          Genres
        </Button>
      </div>
    </header>
  );
}
