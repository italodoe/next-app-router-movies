import Link from "next/link";

export default function Footer() {
  return (
    <header className=" h-12 bg-zinc-700 text-zinc-100 flex flex-row p-4 items-center">
      <Link href="/">
        <div id="main_logo" className="text-xl font-black ">
          Movies!
        </div>
      </Link>
    </header>
  );
}
