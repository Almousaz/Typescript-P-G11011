import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const posts = pgTable('posts', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    content: varchar("content", { length: 256 }).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull()
})

export type Post = InferSelectModel<typeof posts>
export type NewPost = InferInsertModel<typeof posts>

// using drizzle-zod
export const upsertPostSchema = createInsertSchema(posts)