import { Router } from "express";
import {
    getPost,
    getPosts,
    addPost,
    editPost,
    deletePost
}
    from "../../controllers/post";

const postRouter=Router()

postRouter.get("/" , getPosts as any)
postRouter.get("/:id" , getPost as any)
postRouter.post("/" , addPost as any)
postRouter.put("/:id" , editPost as any)
postRouter.delete("/:id" , deletePost as any)

export default postRouter