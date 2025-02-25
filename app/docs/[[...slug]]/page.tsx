
type PageProps = {
    params: Promise<{ slug: string[] }>;
};


export default async function Doc(props: PageProps) {
    const params = await props.params;

    const { slug = [] } = params;

    const pathName = slug.join("/");
    return (
        <div>

            asdf
            {slug}
        </div>
    )
}