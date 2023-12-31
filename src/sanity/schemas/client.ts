import { UserIcon } from '@sanity/icons'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { defineField, defineType } from 'sanity'

export interface ClientType {
    link: string,
    name: string,
    _id: string,
    picture: SanityAsset,
}

export default defineType({
    name: 'client',
    title: 'Clients',
    icon: UserIcon,
    type: 'document',
    fields: [
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
