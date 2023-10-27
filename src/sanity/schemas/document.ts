import { defineField } from 'sanity'

export interface DocumentType {
    slug?: {
        current?:string
    },
    title?:string,
    description?: string
}

export default [
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
            isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string'
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string'
    }),
]