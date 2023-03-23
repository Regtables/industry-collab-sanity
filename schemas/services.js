export default {
  name: 'services',
  title: 'Services Page',
  type: 'document',
  fields: [
    {
      name: 'section',
      type: 'string'
    },
    {
      name: 'banner',
      type: 'banner'
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'service'
        }]
      }]
    }
  ]
}