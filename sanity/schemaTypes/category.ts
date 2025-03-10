import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'headings',
      type: 'array',
      title: 'Headings',
      of: [{ type: 'reference', to: [{ type: 'heading' }] }],
    }),
  ],
})

export const heading = defineType({
  name: 'heading',
  title: 'Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'pages',
      type: 'array',
      title: 'Pages',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    }),
  ],
})

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'heading',
      type: 'reference',
      title: 'Heading',
      to: [{ type: 'heading' }],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'subpages',
      type: 'array',
      title: 'Subpages',
      of: [{ type: 'reference', to: [{ type: 'subpage' }] }],
    }),
  ],
})

export const subpage = defineType({
  name: 'subpage',
  title: 'Subpage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'page',
      type: 'reference',
      title: 'Parent Page',
      to: [{ type: 'page' }],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
  ],
})
