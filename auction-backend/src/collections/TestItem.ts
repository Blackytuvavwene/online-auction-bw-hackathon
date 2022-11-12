import { CollectionConfig, Field } from "payload/types";

// images field
const images: Field = {
    name: 'images',
    type: 'array',
    // labels:{
    //   singular: 'Image',
    //   plural: 'Images',
    // },
    fields:[
      {
        name: 'image',
        type: 'upload',
        relationTo: 'storage',
      }
    ]
   
  
  };
  
  
  
  // AuctionItems Collection for creating and updating of auction items.
  const TestItems: CollectionConfig = {
    slug: 'test',
    
    admin: {
      useAsTitle: 'itemName',
    },
    labels:{
      singular: 'Auction Test',
      plural: 'Auction Test',
    },
    
    timestamps: true,
    access: {
      read: () => true,
      // create only to logged in users
      create: ({ req: {user} }) => {
  
        return Boolean(user);
      },
  
      // update only to same user
      update: ({ req: {user} }) => {
       
  
        return Boolean(user );
      }
    },
    fields: [
      {
        name: 'itemName',
        type: 'text',
        label: 'Item Name',
      },
      {
        name: 'itemDescription',
        type: 'textarea',
        label: 'Item Description',
      },
      {
        name: 'itemShortDescription',
        type: 'textarea',
        label: 'Item Short Description',
        maxLength: 160,
      },
      {
        name:'seller',
        type: 'relationship',
        relationTo: 'users',
      },
      {
        name: 'startingBid',
        type: 'number',
        label: 'Starting Bid',
      },
      {
        name: 'incrementalBid',
        type: 'number',
        label: 'Incremental Bid',
      },
      {
        name: 'category',
        label: 'Category',
        type: 'select',
        options: [
          {
            label: 'Property',
            value: 'property',
          },
          {
            label: 'Electronics',
            value: 'electronics',
          },
          {
            label: 'Vehicles',
            value: 'vehicle',
          },
          {
            label: 'Furniture',
            value: 'furniture',
          },
          {
            label: 'Land',
            value: 'land',
          }
        ]
      },
      images,
    ],
  }
  
  export default TestItems;