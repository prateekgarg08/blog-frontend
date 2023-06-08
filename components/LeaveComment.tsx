import React, { useState } from "react";
import { postComment } from "../pages/api/posts";
import { useRouter } from "next/router";

function LeaveComment({ setShow }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const { slug } = router.query;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, msg);
    try {
      const comment = await postComment(username, email, msg, slug);
      // router.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="w-full static text-gray-800 ">
      <form
        onSubmit={handleSubmit}
        className=" w-full  p-8  space-y-6 rounded-md shadow bg-white ng-untouched ng-pristine ng-valid "
      >
        <div className="flex justify-between w-full items-center">
          <h2 className="w-full text-3xl font-bold leading-tight">Leave a Comment</h2>
          <span className="text-3xl cursor-pointer" onClick={() => setShow(false)}>
            &times;
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="w-full">
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required={true}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="block border w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#980000] bg-white"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required={true}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="block border w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#980000] bg-white"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            className="block border w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#980000] bg-white"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#980000] focus:ring-[#980000] hover:ring-[#980000] text-gray-50"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default LeaveComment;
