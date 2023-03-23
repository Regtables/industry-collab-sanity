export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'string'
    },
    {
      name: 'home',
      title: 'Home Page',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
        {
          name: 'homeText',
          title: 'Home Page Text',
          type: 'array',
          of: [{
            type: 'block'
          }]
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'page',
      title: 'Team Page',
      type: 'object',
      fields: [
        {
          name: 'banner',
          type: 'banner'
        },
        {
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{
              type: 'member'
            }]
          }]
        }
      ]
    }
  ]
}