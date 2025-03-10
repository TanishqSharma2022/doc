import { defineQuery } from "next-sanity";

export const categoryCardQuery = defineQuery(`
        *[_type == "category"]{
     _id, 
     title,
     description,
     logo,
       "slug": slug.current,
      headings[0]->{"slug":slug.current}
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
        "slug": slug.current,
        subpages[]->{
          _id,
          title,
          "slug": slug.current
        }
      }
    }
  }
`;
