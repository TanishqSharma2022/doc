import { sanityFetch } from "@/sanity/lib/client"
import Sidebar from "./Sidebar"
import { categoryWithFullStructureQuery, categoryWithHeadingsQuery } from "@/sanity/lib/queries"
import { notFound, redirect } from "next/navigation"
// import { useParams } from "next/navigation"

export default async function SidebarWrapper({slug}) {
    console.log(slug)
    const categorySlug = slug[0]
    const data = await sanityFetch({
        query: categoryWithFullStructureQuery,
        params: { slug: categorySlug }
    });
    if(!data){
        notFound()
    }
    return (
        <>
            <Sidebar data={data} />
        </>
    )
}