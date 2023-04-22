import React, { useState, createContext } from "react";

export const context = createContext();


export const PostContainer = ({ children }) => {
  const [post, setPost] = useState([]);

  return (
    <context.Provider value={{ 
      post, 
      setPost 
    }}>
      {children}</context.Provider>
  );
};
