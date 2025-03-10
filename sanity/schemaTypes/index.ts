import { type SchemaTypeDefinition } from 'sanity'
import {category, page, subpage,  heading} from "./category"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, page, subpage,  heading],
}
