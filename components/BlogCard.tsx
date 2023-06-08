// import React from 'react'

import Link from "next/link";
import { Post } from "../types/post";

function BlogCard({ title, addedAt, description, _id, commentCount }: Post) {
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
  return (
    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#0f0f0f]">
          {MONTH[month]} {date}, {year}
        </span>
      </div>
      <div className="mt-3">
        <Link href={`/posts/${_id}`} className="text-2xl font-bold hover:underline">
          {title}
        </Link>
        <p className="mt-2">{description.substring(0, 350)}...</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link className="hover:underline text-[#980000]" href={`/posts/${_id}`}>
          Read more
        </Link>

        <div>
          <span className="hover:underline text-[#0f0f0f]">{commentCount} Comments</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
