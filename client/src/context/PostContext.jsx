import React, { useState, createContext, useContext, useEffect } from "react";
import { createPostRequests, getPostsRequests } from "../api/posts";

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
    console.log({postContext: post})
     const res = await createPostRequests(post).then((res)=>res);
     console.log("RES CREATE POST:", res)
     setPost([...posts, res.data])
  }

  useEffect(()=> {
    getPosts()
  },[]);

  return (
    <context.Provider
      value={{
        posts,
        createPost
      }}
    >
      {children}
    </context.Provider>
  );
};
