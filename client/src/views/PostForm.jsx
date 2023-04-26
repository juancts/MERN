import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export const PostForm = () => {
  const navigate = useNavigate();
  const { createPost } = usePosts();
  return (
    <div>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={(values, actions) => {
          createPost(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
          navigate("/");
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Field type="text" name="title" placeholder="Title" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white"/>
            <ErrorMessage name="title" component="p" className="text-red-400 text-sm "/>
            <Field type="text" name="description" placeholder="Description" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white"/>
            <ErrorMessage name="description" component="p" className="text-red-400 text-sm"/>
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
