import "../../axios";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { Post } from "../../types/post";
import Header from "../../components/Header";
import { Comment as CommentInterface } from "../../types/comment";
import LeaveComment from "../../components/LeaveComment";
import { getPost } from "../api/posts";
import Comment from "../../components/Comment";
import { motion, AnimatePresence } from "framer-motion";
import CloudImage from "../../components/CloudImage";
import { useAuthContext } from "../../contexts/authContext";
import { deletePost, updatePost } from "../api/admin";

export default function BlogPost({ postData }) {
  const router = useRouter();
  const slug = router.query.slug;
  const d = postData?.post.addedAt?.split("-");
  const year = d && d[0];
  const month = d && d[1];
  const date = d && d[2].split("T")[0];
  const { isLogged } = useAuthContext();
  const handleDelete = async () => {
    const data = await deletePost(slug);
    console.log(data);
    router.push("/admin");
  };
  const handlePublish = async () => {
    const data = await updatePost(slug, { isPublished: true });
    console.log(data);
    router.reload();
  };
  const MONTH = {
    "01": "Janurary",
    "02": "Feburary",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center">
        <div className="container max-w-6xl px-2 py-10 mx-auto">
          <div className="flex w-full gap-3 justify-end items-center">
            {isLogged && (
              <>
                <button className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#980000] focus:ring-[#980000] hover:ring-[#980000] text-gray-50">
                  Edit
                </button>
                {!postData.post.isPublished && (
                  <button
                    onClick={handlePublish}
                    className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#980000] focus:ring-[#980000] hover:ring-[#980000] text-gray-50"
                  >
                    Publish
                  </button>
                )}
                <button
                  onClick={handleDelete}
                  className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#980000] focus:ring-[#980000] hover:ring-[#980000] text-gray-50"
                >
                  Delete
                </button>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold">{postData.post.title}</h1>
          <span className="text-sm ">
            {MONTH[month]} {date}, {year}
          </span>
          {postData.post.image_public_id && (
            <motion.div
              className="flex w-full justify-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CloudImage image_public_id={postData.post.image_public_id} isThum={false} />
            </motion.div>
          )}
          <div className="my-container my-5" dangerouslySetInnerHTML={{ __html: postData.post.description }}></div>
          <div className="mt-10 flex flex-col items-start gap-5">
            <div className="flex w-full justify-between items-center">
              <h2 className="text-2xl font-bold">Comments</h2>
              <button
                onClick={() => setShow(!show)}
                className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#980000] focus:ring-[#980000] hover:ring-[#980000] text-gray-50"
              >
                {!show ? `Add Comment` : "Hide"}
              </button>
            </div>
            <AnimatePresence>
              {show && (
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <LeaveComment setShow={setShow} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-2 py-5">
            {postData.post.comments.map((comment: CommentInterface, index: number) => {
              console.log(comment);
              return <Comment key={index} comment={comment} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const postData = await getPost(context.params.slug);

    console.log(postData.post);
    return {
      props: {
        postData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
