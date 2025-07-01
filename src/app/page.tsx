import Header from "@/components/sections/home/Header";
import ArtWorks from "@/components/sections/home/ArtWorks";
import About from "@/components/sections/home/About";
import { getArtworks } from "@/lib/strapi";

export default async function Home() {
  const artworks = await getArtworks(true);

  return (
    <div>
      <Header />
      <ArtWorks artworks={artworks} />
      <About />
    </div>
  );
}
