import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { GroupCollection } from './collections/Group'

const mockModulePath= path.resolve(__dirname,"mocks",'emptyFunction.js');











export default buildConfig({
  admin: {
    user: Users.slug,
    webpack:(config)=>({
...config,
resolve:{
  ...config.resolve,
  extensions:['.ts','.js','.jsx','.tsx'],
  alias:{
    ...config.resolve.alias,
    fs:mockModulePath,
  }
}
    }),
    bundler: webpackBundler(),
  },
  
  editor: slateEditor({}),
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(','):[],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(','):[],

  collections: [Users,Pages,Media,GroupCollection],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable:true,
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
