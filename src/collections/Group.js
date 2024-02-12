// import { CollectionConfig } from 'payload/types'

export const GroupCollection = {
  slug: 'example-collection',
  fields: [
    {
      name: 'pageMeta', // required
      type: 'group', // required
      interfaceName: 'Meta', // optional
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
  ],
}