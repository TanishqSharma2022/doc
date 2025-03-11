export interface HeadingProps{
    slug: string,
    pages: PageProps
}

export interface PageProps{
    slug: string
}

export interface CardProps{
    id: string,
    title: string,
    description: string,
    logo: any,
    slug: string,
    headings: HeadingProps
}   


export interface HeroDataProps {
    heading1: string,
    heading2: string, 
    subheading: string,
    button1: HeroButtonProps
    button2: HeroButtonProps

}

interface HeroButtonProps {
    text: string,
    icon: string
}