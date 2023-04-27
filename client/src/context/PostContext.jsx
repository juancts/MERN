import React, { useState, createContext, useContext, useEffect } from "react";
import {
  createPostRequests,
  deletePostRequests,
  getPostRequest,
  getPostsRequests,
  updatePostRequest,
} from "../api/posts";

const context = createContext();

//CREO UN HOOK PERSONALIZADO QUE NO ES MAS Q UNA FUNCIÓN
export const usePosts = () => {
  const postContext = useContext(context);

  return postContext;
};

export const PostProvider = ({ children }) => {
  const [posts, setPost] = useState([]);

  //GET POSTS FUNCTION
  const getPosts = async () => {
    const res = await getPostsRequests();
    setPost(res.data);
    
  };

  const createPost = async (post) => {
    console.log({ postContext: post });
    const res = await createPostRequests(post).then((res) => res);
    console.log("RES CREATE POST:", res);
    setPost([...posts, res.data]);
  };

  const deletePost = async (_id) => {
    await deletePostRequests(_id);
    setPost(posts.filter((post) => post._id !== _id));
  };

  const getPost = async (_id) => {
    const res = await getPostRequest(_id);
    return res.data;
  };

  const updatePost = async (_id, newfields) => {
    const res = await updatePostRequest(_id, newfields);
    const postupdated = posts.map((post)=>(post._id === _id ? newfields : post))
    setPost(postupdated)
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </context.Provider>
  );
};
