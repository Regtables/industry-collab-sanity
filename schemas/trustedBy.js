export default {
  name: 'trustedBy',
  title: 'Trusted By',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'client'
        }]
      }]
    }
  ]
}