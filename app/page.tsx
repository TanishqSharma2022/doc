import Hero from "@/components/Hero/Hero";
import Updates from "@/components/Hero/Updates";
import { sanityFetch } from "@/sanity/lib/client";
import { ChangelogQuery, RoadmapQuery } from "@/sanity/lib/queries";
export default async function Home() {

  const roadMapData = await sanityFetch({query: RoadmapQuery});
  const ChangelogData = await sanityFetch({query: ChangelogQuery});
  return (
    <>
      <Hero />
      <Updates roadMapData={roadMapData} ChangelogData={ChangelogData} />
    </>
  );
}
