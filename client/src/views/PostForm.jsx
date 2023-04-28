import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/PostContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export const PostForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null
  });

  const { createPost, getPost, updatePost } = usePosts();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPost(params.id);
        setPost(res);
      }
    })();
  }, [params.id]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black rounded">
        <header className="flex justify-between items-center py-4 text-white mb-4">
          <h3>New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            
          })}
          onSubmit={async (values, actions) => {
            
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false);
            navigate("/");
          }}
          enableReinitialize
        >
          {({handleSubmit, setFieldValue, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Title
              </label>
              <Field
                type="text"
                name="title"
                placeholder="Title"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-400 text-sm "
              />
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Description
              </label>
              <Field
                type="text"
                name="description"
                placeholder="Description"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-400 text-sm"
              />

              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Image
              </label>
              <input type="file" name="image" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              onChange={(e)=> setFieldValue("image", e.target.files[0])}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 to-white focus:outline-none disabled:bg-indigo-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 
                    (<AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/> ) : "Save"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
