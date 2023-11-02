import { defineField } from 'sanity'
import { SanityAsset } from '@sanity/image-url/lib/types/types'

export interface DocumentType {
    id: string
    slug: {
        current?: string
    },
    title: string,
    description: string
    coverImage: SanityAsset
    date: string,
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
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'date',
        title: 'Date',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        validation: (rule) => rule.required()
    }),
]