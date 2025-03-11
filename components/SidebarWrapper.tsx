import { sanityFetch } from "@/sanity/lib/client"
import Sidebar from "./Sidebar"
import { categoryWithFullStructureQuery } from "@/sanity/lib/queries"
import { notFound} from "next/navigation"
export default async function SidebarWrapper({slug}:{slug:string[]}) {

    const categorySlug = slug[0]
    const data = await sanityFetch({
        query: categoryWithFullStructureQuery,
        params: { slug: categorySlug }
    });


    if (!data) {
        notFound()
    }

    return (
        <>
            <Sidebar data={data} />
        </>
    )
}