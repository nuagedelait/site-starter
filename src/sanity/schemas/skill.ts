import { UserIcon } from '@sanity/icons'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { defineField, defineType } from 'sanity'

export interface SkillType {
    slug: {
        current: string
    },
    name: string,
    _id: string,
    picture: SanityAsset,
    link: string
}

export default defineType({
    name: 'skill',
    title: 'Skills',
    icon: UserIcon,
    type: 'document',
    fields: [
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
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'picture',
            title: 'Picture',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
    ],
})
