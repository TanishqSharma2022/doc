"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useState } from "react";
import { motion } from 'framer-motion'
import {
    urlFor


} from "@/sanity/lib/image";
import Image from "next/image";
interface Category {
    title: string;
    slug: string;
    initialPageSlug: string;
}

const categories: Category[] = [
    { title: "Cxful Design System", slug: "cxful-design-system", initialPageSlug: "design-system-guides" },
    { title: "UIUX Suites", slug: "uiux-design-kit", initialPageSlug: "uiux-design-guides" },
    { title: "Development Sync", slug: "development-sync", initialPageSlug: "development-guides" },
];

export default function Sidebar({ data }: any) {
    const [activeDropdown, setActiveDropdown] = useState<Category>(data);
    const router = useRouter();

    const handleSelection = (category: Category) => {
        setActiveDropdown(category);
        router.push(`/docs/${category.slug}/${category.initialPageSlug}/overview`);
    };
    return (
        <aside className="min-w-[280px] p-[32px] sticky top-16 border-border-subtle border-r min-h-screen">

            <DropdownMenu>
                <DropdownMenuTrigger className="min-w-[200px] label-sm-regular justify-between flex items-center gap-4 border border-border-subtle p-[12px] rounded-[12px]">
                    {activeDropdown.title} <ChevronDown size={13} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {categories.map((category) => (
                        <DropdownMenuItem
                            key={category.title}
                            onClick={() => handleSelection(category)}
                        >
                            {category.title}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <nav className="mt-6">
                <SidebarEntries data={data} />
            </nav>
        </aside>
    );
}
interface Page {
    title: string;
    slug: string;
    icon: JSX.Element;
}

interface Subheading {
    title: string;
    slug: string;
    icon: string;
    pages: Page[];
}

interface Heading {
    title: string;
    slug: string;
    pages: Page[];
    subheadings?: Subheading[];
}

interface CategoryData {
    slug: string;
    headings: Heading[];
}

interface SidebarEntriesProps {
    data: CategoryData;
}




const SidebarLink: React.FC<{ link: string; page: Page; isActive: boolean }> = ({ link, page, isActive }) => (
    <Link
        href={link}
        className={`hover:bg-fill-subtle px-[8px] py-[8px] rounded-lg mb-[8px] flex items-center justify-between gap-2 label-sm-medium text-fg-strong ${isActive ? "bg-fill-subtle effects-shadow-5" : ""}`}
    >
        <div className={`flex items-center gap-2 ${isActive ? "text-fg-brand-default" : ""} `}>
            <span className={` ${isActive ? "bg-fg-brand-default" : "bg-fill-default"}   w-[20px] h-[20px] flex items-center justify-center rounded-md  text-white `}>
                <Image
                    width={100}
                    height={100}
                    alt="icon"
                    src={urlFor(page.icon).width(20).url()} />
            </span>
            {page.title}
        </div>
        {isActive && <ChevronRight size={13} />}
    </Link>
);


const SubheaingSidebarLink: React.FC<{ link: string; page: Page; isActive: boolean }> = ({ link, page, isActive }) => (
    <Link
        href={link}
        className={`hover:bg-fill-subtle px-[8px] py-[8px]  border-l-2 flex items-center justify-between gap-2 label-sm-medium text-fg-strong ${isActive ? "border-fg-brand-default bg-fill-subtle effects-shadow-5" : ""}`}
    >
        <div className={`flex items-center gap-4 ${isActive ? "text-fg-brand-default" : ""} `}>
            {page.title}
            {<ArrowRight size={13} />}
        </div>
    </Link>
);

const SidebarEntries: React.FC<SidebarEntriesProps> = ({ data }) => {
    const pathName = usePathname();
    const [openSubheadings, setOpenSubheadings] = useState<{ [key: string]: boolean }>({});

    const toggleSubheading = (slug: string) => {
        setOpenSubheadings((prev) => ({ ...prev, [slug]: !prev[slug] }));
    };

    return (
        <>
            {data.headings.map((heading) => (
                <div key={heading.slug}>
                    <h1 className={`title-xs-semibold text-fg-strong mb-[16px] `}>{heading.title}</h1>
                    {heading.pages.map((page) => {
                        const link = `/docs/${data.slug}/${heading.slug}/${page.slug}`;
                        return <SidebarLink key={page.slug} link={link} page={page} isActive={pathName === link} />;
                    })}



                    {heading.subheadings?.map((subheading) => (
                        <div key={subheading.slug}>
                            <button
                                onClick={() => toggleSubheading(subheading.slug)}
                                className="w-full flex justify-between items-center py-[8px] px-[8px] text-fg-strong label-sm-medium hover:bg-fill-subtle rounded-lg mb-[4px]"
                            >
                                <span className={`flex items-center gap-2 `} >
                                    <Image
                                        width={20}
                                        height={20}
                                        alt="icon"
                                        src={urlFor(subheading.icon).width(20).url()} />
                                    {subheading.title}

                                </span>
                                {openSubheadings[subheading.slug] ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                            </button>





                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: openSubheadings[subheading.slug] ? "auto" : 0, opacity: openSubheadings[subheading.slug] ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden pl-[16px]"
                            >
                                {openSubheadings[subheading.slug] &&
                                    subheading.pages.map((page) => {
                                        const link = `/docs/${data.slug}/${heading.slug}/${subheading.slug}/${page.slug}`;
                                        return <SubheaingSidebarLink key={page.slug} link={link} page={page} isActive={pathName === link} />;
                                    })}
                            </motion.div>
                        </div>
                    ))}
                    <div className="h-[1px] w-[100%] bg-border-subtle mx-auto mt-[16px] mb-[16px]" />
                </div>
            ))}
        </>
    );
};