import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

//GET ALL POSTS FROM DB
const GET_allposts = async (req, res) => {
  try {
    const post = await Post.find();
    console.log("OK GET ALL POSTS");
   return res.json(post);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

//CREATE NEW POSTS
const POST_allposts = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    //UPLOAD TO CLOUDINARY
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      //REMOVE THE FILE TEMP BECAUSE IT WAS ALREADY UPLOADED IN THE PREVIOUS LINE
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
    const newPost = new Post({ title, description, image });
    await newPost.save();
    console.log(newPost);
    return res.json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//UPDATE POSTS
const UPDATE_post = async (req, res) => {
  try {
    const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body);
    console.log("OK POST UPDATED");
    return res.send(postUpdated);
  } catch (error) {
    const errorMessage = () => res.status(500).json({ message: error.message });
  }
};
//DELETE POSTS
const DELETE_allpost = async (req, res) => {
  try {
    const postDeleted = await Post.findByIdAndDelete(req.params.id);
    //console.log(postDeleted)
    if (!postDeleted) return res.status(404).send("Not Found");
    console.log("PUBLIC ID:", postDeleted.image.public_id);
    await deleteImage(postDeleted.image.public_id);
    return res.status(204).json({message: "Post deleted"});
  } catch (error) {
    const errorMessage = () => res.status(500).json({ message: error.message });
  }
};

//FIND POST BY ID
const GET_post = async (req, res) => {
  try {
    const postFound = await Post.findById(req.params.id);
    console.log(postFound);
    if (!postFound) return res.status(404).send("Not Found");
    return res.json(postFound);
  } catch (error) {
    const errorMessage = () => res.status(500).json({ message: error.message });
  }
};

export { GET_allposts, POST_allposts, DELETE_allpost, UPDATE_post, GET_post };
