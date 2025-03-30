import {db} from '../../db';
import {Post, posts, NewPost} from '../../db/schema';
import {eq, like} from 'drizzle-orm';
import {postValidators} from '../../validator/post';

export const getPostsService = async (search: string): Promise<Post[]> => {
  // work with ORM to fetch data from database
  // drizzle-orm
  const allPosts = await db
    .select()
    .from(posts)
    .where(search ? like(posts.title, `%${search}%`) : undefined);
  return allPosts;
};

export const getPostService = async (id: string): Promise<Post | undefined> => {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, id),
  });

  return post;
};

export const addPostService = async (
  body: NewPost
): Promise<Post | undefined> => {
  // add zod validator from drizzle-zod
  const post = postValidators.upsert<Pick<Post, 'title' | 'content'>>(body);

  const newPost = await db.insert(posts).values(post).returning();

  if (newPost) return newPost[0];
};

export const editPostService = async (
  id: string,
  body: NewPost
): Promise<Post | undefined> => {
  // add zod validator from drizzle-zod
  const post = postValidators.upsert<Pick<Post, 'title' | 'content'>>(body);

  const editedPost = await db
    .update(posts)
    .set(post)
    .where(eq(posts.id, id))
    .returning();

  if (editedPost) return editedPost[0];
};

export const deletePostService = async (
  id: string
): Promise<string | undefined> => {
  const deletedPost = await db
    .delete(posts)
    .where(eq(posts.id, id))
    .returning({id: posts.id});

  if (deletedPost) return deletedPost[0].id;
};
