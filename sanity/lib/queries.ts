import { defineQuery } from "next-sanity";

export const categoryCardQuery = defineQuery(`
        *[_type == "category"]{
     _id, 
     title,
     description,
     logo,
       "slug": slug.current,
      headings[0]->{
      "slug":slug.current,
       pages[0]->{"slug":slug.current}
      },
      
   }`)

export const categoryWithHeadingsQuery = defineQuery(`
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    description,
    logo,
    "slug": slug.current,
    headings[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`);


export const headingWithPagesQuery = defineQuery(`
  *[_type == "heading" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    pages[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`);


export const pageWithSubpagesQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    content,
    subpages[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`);


export const subpageQuery = defineQuery(`
  *[_type == "subpage" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    content
  }
`);


export const categoryWithFullStructureQuery = `
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    headings[]->{
      _id,
      title,
      "slug": slug.current,
      pages[]->{
        _id,
        title,
        icon,
        "slug": slug.current,
      },
       subheadings[]->{
          _id,
          title,
          icon,
          "slug": slug.current,
          pages[]->{
        _id,
        title,
        icon,
        "slug": slug.current,
        
      }
        }
    }
  }
`;


export const pageContentQuery = defineQuery(`
  *[
  _type == "page" &&
  (
    heading->slug.current == $headingSlug ||
    subheading->slug.current == $subheadingSlug
  ) &&
  slug.current == $pageSlug
][0]{
  content
}
  `)



  export const HeroContentQuery = defineQuery(`*[_type == "hero"][0] {
  heading1,
  heading2,
  button1 {
    text,
    "icon": icon.asset->url
  },
  button2 {
    text,
    "icon": icon.asset->url
  },
  subheading
}`);


export const RoadmapQuery = defineQuery(`*[_type == "roadmap"] {
  title,
    description,
    date,
    image,
    slug

  }`)

export const ChangelogQuery = defineQuery(`*[_type == "changelog"] {
  title,
    description,
    date,
    image,
    slug

  }`)