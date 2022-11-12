import { CollectionConfig } from "payload/types";

const StorageBoxes : CollectionConfig={
   slug: 'storage',
   labels: {
    singular: 'Storage',
    plural: 'Storage',
   },
   access:{
        read: () => true,
   },
   upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        position: 'centre',
      },
    ],
   
   },
   fields: [
    {
        name: 'imageAlt',
        type: 'text',
    }
   ],
}

export default StorageBoxes;