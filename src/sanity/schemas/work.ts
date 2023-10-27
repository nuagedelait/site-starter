import { RocketIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'
import document, { DocumentType } from './document'

import clientType from './client'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { SanityReference } from '@sanity/client'

export interface WorkType extends DocumentType {
    content?:any[],
    coverImage: SanityAsset,
    date?:string,
    client?: SanityReference,
    gallery?: SanityAsset[]
}

export default defineType({
  name: 'work',
  title: 'Works',
  icon: RocketIcon,
  type: 'document',
  fields: [
    ...document,
    defineField({
      name: 'content',
      title: 'Content',
      type: 'textEditor',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: clientType.name }],
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
