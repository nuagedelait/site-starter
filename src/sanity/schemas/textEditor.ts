import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'textEditor',
    type: 'array',
    title: 'Rich text',
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
            ],
        },
        {
            type: 'image',
            fields: [
                {
                    name: 'caption',
                    title: 'Visible caption below the image',
                    description:
                        "⚡ Optional but highly encouraged to contextualize readers as they navigate through your guide's images.",
                    type: 'string',
                    validation: (Rule) =>
                        Rule.required().warning('Adding a caption will help contextualizing readers.'),
                },
                {
                    name: 'alt',
                    title: 'Alternative text for screen readers',
                    description:
                        "Optional. If the caption above is descriptive enough, there's no need to fill this field. Else, consider adding alternative text to make content more accessible.",
                    type: 'string'
                },
            ],
            options: {
                hotspot: true,
                storeOriginalFilename: false,
            },
        },
        {
            title: 'Code block',
            type: 'code',
        }
    ]
})