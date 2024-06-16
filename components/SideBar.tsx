import { Genre } from "@/lib/movies";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SideBarProps = {
  className?: string;
  genres: Genre[];
};

export default function SideBar({ className, genres }: SideBarProps) {
  return (
    <div className={cn(" min-w-28 flex flex-col gap-1 hover:", className)}>
      {genres.map((genre) => (
        <Link href={`/genres/${genre.id}`}
          key={genre.id}
          className=" overflow-hidden truncate text-zinc-500 bg-stone-50 py-1 px-2 w-auto hover:text-zinc-900 hover:bg-blue-100"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}
