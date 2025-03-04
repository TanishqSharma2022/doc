import { type SchemaTypeDefinition } from 'sanity'
import {categories} from "./category"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories],
}
