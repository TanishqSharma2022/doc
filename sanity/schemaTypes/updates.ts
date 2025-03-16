import { defineField, defineType } from "sanity";

export const roadmap = defineType({
    name: 'roadmap',
    title: 'Roadmap',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Feature Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'text',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'newFeatures',
            title: 'New Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Features Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Features Icon',
                            type: 'image',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'bugFixes',
            title: 'Bug Fixes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Bug Fixes Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Bug Fixes Icon',
                            type: 'image',
                        }),
                    ],
                },
            ],
        }),
    ],
})


export const changelog = defineType({
    name: 'changelog',
    title: 'Changelog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Feature Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'text',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'newFeatures',
            title: 'New Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Features Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Features Icon',
                            type: 'image',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'bugFixes',
            title: 'Bug Fixes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Bug Fixes Text',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Bug Fixes Icon',
                            type: 'image',
                        }),
                    ],
                },
            ],
        }),
    ],
})