// import type { CollectionConfig } from 'payload'

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//   ],
//   upload: true,
// }

import { CollectionConfig } from 'payload'
import { uploadToSupabase } from '../utils/upload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // Define the handler inside the 'handlers' object
    handlers: {
      upload: async ({ file, filename }) => {
        const buffer = file.buffer
        const path = await uploadToSupabase(buffer, filename)
        return path // Store this path in Payload CMS
      },
    },
  },
  fields: [
    {
      name: 'altText',
      type: 'text',
    },
  ],
}

export default Media
