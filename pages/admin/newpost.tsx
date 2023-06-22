import React, { useState } from "react";
import TextEditor from "../../components/TextEditor";
import Link from "next/link";
import { newPost } from "../api/admin";
import { useRouter } from "next/router";
import Header from "../../components/Header";
function Newpost() {
  const [description, setDescription] = useState();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const handleSelectFile = (e) => setFile(e.target.files[0]);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(title, description, file);
      const post = await newPost(title, description, file);
      console.log(post);
      router.push(`/posts/${post._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="w-full max-w-6xl flex flex-col gap-2  rounded-2xl shadow-2xl my-5 py-5 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">New Post</h2>
        </div>

        <div className="mt-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoComplete="email"
                  required
                  placeholder="Title"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Image
              </label>
              <div className="mt-2">
                <input id="file" type="file" onChange={handleSelectFile} multiple={false} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
              </div>
              <div className="mt-2">
                <TextEditor value={description} setValue={setDescription} />
              </div>
            </div>
            <p>
              <strong>Note</strong>: All new post are unpubished at first
            </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#980000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d90202] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#980000]"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newpost;
