import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/drizzle",
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url : String(process.env.POSTGRES_URL) ,
  },
  
  verbose: true,
  strict: true,
});
