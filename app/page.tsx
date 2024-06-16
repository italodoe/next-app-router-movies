import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center   ">
      <h1>App router</h1>
      <div>
        <Link href="/movies" className="main-link">movies</Link>
      </div>
    </main>
  );
}
