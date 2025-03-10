
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



export default async function Doc(props: PageProps) {
    const params = await props.params;

    const { slug = [] } = params;

    

    return (
        <div className="flex ">
            <SidebarWrapper slug={slug} />

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
        </div>

    )
}