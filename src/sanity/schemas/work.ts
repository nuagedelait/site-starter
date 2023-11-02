import { RocketIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'
import document, { DocumentType } from './document'
import { ClientType } from './client'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { SanityReference } from '@sanity/client'
import { SkillType } from './skill'

export interface WorkType extends DocumentType {
  notes?: any[],
  client?: SanityReference | ClientType,
  gallery?: SanityAsset[],
  mission?: string,
  skills?: SkillType[],
  link?: string;
  tasks?: string[]
}

export default defineType({
  name: 'work',
  title: 'Works',
  icon: RocketIcon,
  type: 'document',
  fields: [
    ...document,
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'string',
    }),
    defineField({
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [
        { type: 'string' }
      ]
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'skill'}
          ]
        }
      ]
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'textEditor',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, client, date }) {
      const subtitles = [
        client && `for ${client}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
