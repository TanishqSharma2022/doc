
type PageProps = {
    params: Promise<{ slug: string[] }>;
};


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



export default async function Doc(props: PageProps) {
    const params = await props.params;

    const { slug = [] } = params;

    return (
        <div className="p-[32px]">

            {/* {slug} */}


            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-fg-weak capitalize" >{slug[1]}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-fg-strong capitalize font-medium" >{slug[2]}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

        </div>
    )
}