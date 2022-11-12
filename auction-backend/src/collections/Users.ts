import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Guest',
          value: 'guest',
        },
        {
          label: 'Super Admin',
          value: 'superAdmin',
        },
        {
          label: 'Seller',
          value: 'seller',
        }
      ],
    },
    {
      name: 'auctionItems',
      type: 'relationship',
      relationTo: 'auction-items',
      hasMany: true,
    }
  ],
};

export default Users;