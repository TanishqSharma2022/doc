"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, Fingerprint } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useState } from "react";

interface Page {
    title: string;
    slug: string;
    icon: JSX.Element;
}

interface Section {
    title: string;
    slug: string;
    pages: Page[];
}

interface CategoryData {
    title: string;
    slug: string;
    sections: Section[];
}

interface Category {
    title: string;
    slug: string;
    initialPageSlug: string;
}

const data: Record<string, CategoryData> = {
    cxful: {
        title: "Cxful Design System",
        slug: "cxful-design-system",
        sections: [
            {
                title: "Design System Guides",
                slug: "design-system",
                pages: [
                    { title: "Overview", slug: "overview", icon: <Fingerprint size={20} /> },
                    { title: "How to use", slug: "how-to-use", icon: <Fingerprint size={20} /> },
                ],
            },
            {
                title: "Foundation",
                slug: "foundation",
                pages: [
                    { title: "Overview", slug: "overview", icon: <Fingerprint size={20} /> },
                    { title: "Colors", slug: "colors", icon: <Fingerprint size={20} /> },
                    { title: "Typography", slug: "typography", icon: <Fingerprint size={20} /> },
                    { title: "Dimensions", slug: "dimensions", icon: <Fingerprint size={20} /> },
                    { title: "Layout and Grid", slug: "layout-grid", icon: <Fingerprint size={20} /> },
                ],
            },
            {
                title: "UX Accessibility",
                slug: "ux-accessibility",
                pages: [
                    { title: "Overview", slug: "overview", icon: <Fingerprint size={20} /> },
                    { title: "ARIA Standards", slug: "aria-standards", icon: <Fingerprint size={20} /> },
                    { title: "UX Writing & Microcopy", slug: "ux-writing", icon: <Fingerprint size={20} /> },
                    { title: "Error & Feedback", slug: "error-and-feedback", icon: <Fingerprint size={20} /> },
                    { title: "Motion & Transitions", slug: "motion-and-transitions", icon: <Fingerprint size={20} /> },
                ],
            },
            {
                title: "Assets",
                slug: "assets",
                pages: [
                    { title: "Overview", slug: "overview", icon: <Fingerprint size={20} /> },
                    { title: "Icons", slug: "icons", icon: <Fingerprint size={20} /> },
                    { title: "Logos", slug: "logos", icon: <Fingerprint size={20} /> },
                    { title: "Media Kit", slug: "media-kit", icon: <Fingerprint size={20} /> },
                ],
            },
            {
                title: "UI Components",
                slug: "ui-components",
                pages: [
                    { title: "Overview", slug: "overview", icon: <Fingerprint size={20} /> },
                    { title: "UI Base", slug: "ui-base", icon: <Fingerprint size={20} /> },
                    { title: "UI Blocks", slug: "ui-blocks", icon: <Fingerprint size={20} /> },
                ],
            },
        ],
    },
    uiux: {
        title: "UIUX Suites",
        slug: "uiux-suites",
        sections: [
            {
                title: "Development Guides",
                slug: "development-guides",
                pages: [
                    { title: "Overview", slug: "overview", icon: <Fingerprint size={20} /> },
                    { title: "How it works", slug: "how-it-works", icon: <Fingerprint size={20} /> },
                ],
            },
            {
                title: "Handoff",
                slug: "handoff",
                pages: [
                    { title: "Overview", slug: "handoff-overview", icon: <Fingerprint size={20} /> },
                    { title: "Design Tokens", slug: "design-tokens", icon: <Fingerprint size={20} /> },
                    { title: "Dimensions - Spacing", slug: "dimensions-spacing", icon: <Fingerprint size={20} /> },
                    { title: "Layouts & Grids", slug: "layouts-and-grids", icon: <Fingerprint size={20} /> },
                    { title: "Assets & Icons", slug: "assets-and-icons", icon: <Fingerprint size={20} /> },
                    { title: "Accessibility", slug: "accessibility", icon: <Fingerprint size={20} /> },
                    { title: "Components", slug: "components", icon: <Fingerprint size={20} /> },
                ],
            },
            {
                title: "Headless Starter",
                slug: "headless-starter",
                pages: [
                    { title: "UI Modules", slug: "ui-modules", icon: <Fingerprint size={20} /> },
                    { title: "UI Sections", slug: "ui-sections", icon: <Fingerprint size={20} /> },
                    { title: "Website Experience", slug: "website-experience", icon: <Fingerprint size={20} /> },
                    { title: "Content Experience", slug: "content-experience", icon: <Fingerprint size={20} /> },
                    { title: "Commerce Experience", slug: "commerce-experience", icon: <Fingerprint size={20} /> },
                ],
            },
        ],
    },
}

const categories: Category[] = [
    { title: "Cxful Design System", slug: "cxful-design-system", initialPageSlug: "design-system" },
    { title: "UIUX Suites", slug: "uiux-suites", initialPageSlug: "development-guides" },
];

export default function Sidebar() {
    const [activeDropdown, setActiveDropdown] = useState<Category>(categories[0]);
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
                <SideBarEntries dataList={data[activeDropdown.slug === "cxful-design-system" ? "cxful" : "uiux"]} />
            </nav>
        </aside>
    );
}

interface SidebarEntriesProps {
    dataList: CategoryData;
}

const SideBarEntries: React.FC<SidebarEntriesProps> = ({ dataList }) => {
    const pathName = usePathname();

    return (
        <>
            {dataList.sections.map((section) => (
                <div key={section.slug}>
                    <h1 className="title-xs-semibold text-fg-strong mb-[16px]">{section.title}</h1>
                    {section.pages.map((page) => {
                        const link = `/docs/${dataList.slug}/${section.slug}/${page.slug}`;
                        return (
                            <Link
                                key={page.slug}
                                href={link}
                                className={`hover:bg-fill-subtle px-[8px] py-[8px] rounded-lg mb-[8px] flex items-center justify-between gap-2 label-sm-medium text-fg-strong ${
                                    pathName === link ? "bg-fill-subtle effects-shadow-5" : ""
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-[20px] h-[20px] flex items-center justify-center rounded-md bg-fill-default text-white p-[6px]">
                                        {page.icon}
                                    </span>
                                    {page.title}
                                </div>
                                {pathName === link ? <ChevronRight size={13} /> : null}
                            </Link>
                        );
                    })}
                    <div className="h-[1px] w-[100%] bg-border-subtle mx-auto mt-[16px] mb-[16px]" />
                </div>
            ))}
        </>
    );
};