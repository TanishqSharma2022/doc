import { defineQuery } from "next-sanity";

export const categoryCardQuery = defineQuery(`
     *[_type == "category"]{
     _id, 
     title,
     description,
     logo,
     slug.current

 }`)