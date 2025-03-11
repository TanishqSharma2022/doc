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
    defineField({
      name: 'subheadings',
      type: 'array',
      title: 'Subheadings',
      of: [{ type: 'reference', to: [{ type: 'subheading' }] }],
    }),
  ],
})

export const subheading = defineType({
  name: 'subheading',
  title: 'Subheading',
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
      name: 'pages',
      type: 'array',
      title: 'Pages',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    }),
  ],
})

export const HeroContainer = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Heading1',
    }),
    defineField({
      name: 'heading2',
      type: 'string',
      title: 'Heading2',
    }),
    
    defineField({
      name: "button1",
      type: "object",
      title: "Button 1",
      fields: [
        defineField({
          name: "text",
          type: "string",
          title: "Button Text",
        }),
        defineField({
          name: "icon",
          type: "image",
          title: "Icon",
        }),
      ],
    }),
    defineField({
      name: "button2",
      type: "object",
      title: "Button 2",
      fields: [
        defineField({
          name: "text",
          type: "string",
          title: "Button Text",
        }),
        defineField({
          name: "icon",
          type: "image",
          title: "Icon",
        }),
      ],
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      title: 'SubHeading',
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
      name: 'subheading',
      type: 'reference',
      title: 'Subheading',
      to: [{ type: 'subheading' }],
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
  ],
})
