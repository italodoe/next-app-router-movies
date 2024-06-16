import { Genre } from "@/lib/movies";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SideBarProps = {
  className?: string;
  genres: Genre[];
};

export default function SideBar({ className, genres }: SideBarProps) {
  const Option = ({ id, name }: { id: string; name: string }) => {
    return (
      <Link
        href={`/genres/${id}`}
        className=" overflow-hidden truncate text-zinc-500 bg-stone-50 py-1 px-2 w-auto hover:text-zinc-900 hover:bg-blue-100"
      >
        {name}
      </Link>
    );
  };
  return (
    <div className={cn(" min-w-28 flex flex-col gap-1 hover:", className)}>
      {<Option key={0} id={"all"} name={"All"}></Option>}
      {genres.map((genre) => (
        <Option key={genre.id} id={String(genre.id)} name={genre.name}></Option>
      ))}
    </div>
  );
}
