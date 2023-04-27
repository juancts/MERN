import axios from 'axios'

export const getPostsRequests = async () => await axios.get("/posts")

export const createPostRequests = async (post) => await axios.post("/posts", post)

export const deletePostRequests = async (_id) => await axios.delete("/posts/" + _id)

export const getPostRequest = async (_id) => await axios.get("/posts/" + _id)

export const updatePostRequest = async (_id, newfields) => await axios.put(`/posts/${_id}`, newfields)