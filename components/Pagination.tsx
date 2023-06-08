import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Pagination({ totalPages, currentPage }) {
  const router = useRouter();
  return (
    <div className="flex gap-2 items-center py-2">
      <Link
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow "
        href={currentPage == 1 ? "#" : `/?page=${currentPage - 1}`}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>
      <span className="block">
        Page <span className="text-[#980000]">{currentPage}</span> of{" "}
        <span className="text-[#980000]">{totalPages}</span>
      </span>
      <Link
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
        href={currentPage == totalPages ? "#" : `/?page=${currentPage + 1}`}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </Link>
    </div>
  );
}

export default Pagination;
