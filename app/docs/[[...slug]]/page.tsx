
type PageProps = {
    params: Promise<{ slug: string[] }>;
};


import SidebarWrapper from "@/components/SidebarWrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { sanityFetch } from "@/sanity/lib/client";
import { pageContentQuery } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";



export default async function Doc(props: PageProps) {
    const params = await props.params;

    const { slug = [] } = params;


    const categorySlug = slug[0];
    const headingSlug = slug[1];
    const isSubheading = slug.length === 4;
    const subheadingSlug = isSubheading ? slug[2] : null;
    const pageSlug = isSubheading ? slug[3] : slug[2];

    const pageContent = await sanityFetch({
        query: pageContentQuery,
        params: { headingSlug, subheadingSlug, pageSlug }
    });
console.log(pageContent)


    return (
        <div className="flex ">
            <SidebarWrapper slug={slug} />

<div>

            <div className="p-[32px]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-fg-weak capitalize" >{slug[1].replaceAll('-', ' ')}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-fg-strong capitalize font-medium" >{slug[2]}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>


        <PortableText 
        value={pageContent.content}
        />

        </div>

        </div>

    )
}