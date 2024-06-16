import SideBar from "@/components/SideBar";
import { getMoviesGenRes } from "@/lib/movies";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const genres = await getMoviesGenRes();
  return (
    <div className="flex flex-row items-stretch gap-5">
      <SideBar genres={genres} className=""></SideBar>
      {children}
    </div>
  );
}
