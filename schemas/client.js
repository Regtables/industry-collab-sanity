export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'imageWidth',
      title: 'Image Width',
      type: 'string'
    },
    {
      name: 'imageHeight',
      title: 'Image Height',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Link to client content/website'
    }
  ]
}