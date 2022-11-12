import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import AuctionItems from './collections/AuctionItems';
import StorageBoxes from './collections/Storage';
import TestItems from './collections/TestItem';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  defaultDepth: 1,
  collections: [
    Users,
    AuctionItems,
    StorageBoxes,
    TestItems
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
