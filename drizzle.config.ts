
import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'file:./comments.db',
    // authToken: process.env.DATABASE_AUTH_TOKEN, // Only if using Turso remote
  },
  verbose: true,
  strict: true,
} satisfies Config;
