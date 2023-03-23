export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'service',
      title: 'Service',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{
        type: 'block',
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
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
  ]
}