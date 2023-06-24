// import React from 'react'

import Link from "next/link";
import { Post } from "../types/post";
import { motion } from "framer-motion";
import CloudImage from "./CloudImage";
// import Image from "next/image";
interface BlogCardProps extends Post {
  link: string;
  index: number;
}
const item = {
  hidden: { x: 100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: (i / 3) * 0.3,
    },
  }),
};
function BlogCard({ index, title, addedAt, description, link, commentCount, image_public_id }: BlogCardProps) {
  const d = addedAt.split("-");
  const year = d[0];
  const month = d[1];
  const date = d[2].split("T")[0];
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
  // console.log(index);
  return (
    <motion.div
      className="container max-w-md flex flex-col justify-end px-5 py-6 mx-auto shadow-lg"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={item}
    >
      {image_public_id && <CloudImage image_public_id={image_public_id} isThum={true} />}
      <div className="px-2 w-full ">
        <div className="mt-3">
          <Link href={link} className="text-lg font-pt-serif font-bold hover:underline">
            {title}
          </Link>
          {/* <p className="mt-2">{description.substring(0, 350)}...</p> */}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-ibm text-[#4f4f4f]">
            Admin - {MONTH[month]} {date}, {year}
          </span>
        </div>
        {/* <div className="w-full flex items-center justify-between mt-4">
          <Link className="hover:underline text-[#980000]" href={link}>
            Read more
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}

export default BlogCard;
