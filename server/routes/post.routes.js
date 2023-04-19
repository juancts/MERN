import { Router } from "express";
import {
  DELETE_allpost,
  GET_allposts,
  GET_post,
  POST_allposts,
  UPDATE_post,
} from "./post.handlers.js";

const router = Router();

router.get("/posts", GET_allposts);
router.post("/posts", POST_allposts);
router.delete("/posts", DELETE_allpost);
router.put("/posts", UPDATE_post);
router.get("/posts/:id", GET_post);

export default router;
