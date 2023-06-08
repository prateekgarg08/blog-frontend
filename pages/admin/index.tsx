import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api/admin";
import { useRouter } from "next/router";
function Index() {
  const router = useRouter();
  const [postData, setPostData] = useState();
  useEffect(() => {
    (async () => {
      const data = await getAllPosts();
      console.log(data);
      setPostData(data);
    })();
  }, []);

  return <div>Index</div>;
}

export default Index;

// export const getServerSideProps = async () => {
//   const postsData = await getAllPosts();
//   return {
//     props: {
//       postsData,
//     },
//   };
// };
