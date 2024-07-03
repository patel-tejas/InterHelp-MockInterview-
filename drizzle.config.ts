import { defineConfig } from 'drizzle-kit'
import * as schema from "./src/lib/schema"
export default defineConfig({
 schema: "./src/lib/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://InterHelp_owner:Vj4ZSosq1Jwh@ep-silent-leaf-a5q3h8oh.us-east-2.aws.neon.tech/InterHelp?sslmode=require",
  },
  verbose: true,
  strict: true,
})
