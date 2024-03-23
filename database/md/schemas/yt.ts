import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'yt',
  title: 'yt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'link',
      type: 'string',
    }),
  ],
})
