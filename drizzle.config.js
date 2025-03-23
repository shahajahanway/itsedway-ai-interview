/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:IoblaQ2nzu4T@ep-black-lake-a5fzitdi.us-east-2.aws.neon.tech/Itsedway%20AI%20Mock?sslmode=require',
    }
  };