import Post from "../models/Post.js";

//GET ALL POSTS FROM DB

const GET_allposts = async (req, res) => {
  const post = await Post.find();
  console.log("ok", post);
  res.json(post);
};
const POST_allposts = async (req, res) => {
  const {title, description} = req.body;
  const newPost = new Post({title, description})
  await newPost.save()
  console.log(newPost)
  return res.json(newPost)
  
};

const UPDATE_post = async (req, res) => {
    const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body)
    return res.send(postUpdated)
};
const DELETE_allpost = async (req, res) => {
    const postDeleted = await Post.findByIdAndDelete(req.params.id)
    !postDeleted ? res.status(404).send("Not Found") : res.status(204).send("Post deleted")
    
};
const GET_post = async (req, res) => {
    const postFound = await Post.findById(req.params.id)
    console.log(postFound)
    if(!postFound)return res.status(404).send("Not Found")
    return res.json(postFound)
};

export { GET_allposts, POST_allposts, DELETE_allpost, UPDATE_post, GET_post };
