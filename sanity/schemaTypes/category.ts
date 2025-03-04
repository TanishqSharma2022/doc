import {defineField, defineType} from 'sanity'

export const categories = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
  ],
})