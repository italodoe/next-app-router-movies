import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main 
      className={cn(
        "bg-black text-zinc-300 flex min-h-screen flex-col",
        "items-center justify-center text-center "
      )}
    >
      <div>
        <div className="font-semibold text-5xl">Not found</div>
        <div className="font-semibold text-5xl">Page</div>
        <div className="font-light text-6xl mt-5">404</div>
      </div>
    </main>
  );
}
