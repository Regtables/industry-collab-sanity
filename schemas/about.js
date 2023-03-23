export default {
  name: 'about',
  title: 'About',
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
      description: 'Content seen on the home page',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
        {
          name: 'homeText',
          title: 'Home Page Text',
          type: 'text'
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
      title: 'About Page',
      type: 'object',
      description: 'Content seen on the About Page',
      fields: [
        {
          name: 'banner',
          type: 'banner'
        },
        {
          name: 'content',
          title: 'Page Content',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'text',
              title: 'Text',
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
        }
      ]
    }
  ]
}