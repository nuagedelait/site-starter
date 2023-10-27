import { MenuIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menu',
    title: 'Menu',
    icon: MenuIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                type: 'menuitem'
            }]
        }),
    ],
})
