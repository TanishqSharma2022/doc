import { type SchemaTypeDefinition } from 'sanity'
import {category, page, subheading,  heading, HeroContainer} from "./category"
import { changelog, roadmap } from './updates'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, page, subheading, heading, HeroContainer, roadmap, changelog],
}
