import { type SchemaTypeDefinition } from 'sanity'
import {category, page, subheading,  heading} from "./category"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, page, subheading, heading],
}
