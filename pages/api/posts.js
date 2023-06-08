// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import "../../axios";
import axios from "axios";
export const getPublishedPosts = async (page) => {
  try {
    const { data } = await axios.get("/", {
      params: {
        page,
      },
    });
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const getPost = async (slug) => {
  try {
    const { data } = await axios.get(`/post/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


export const postComment = async (username, email, msg, postId) => {
  try {
    const { data } = await axios.put(`/post/${postId}/comment`, {

      username,
      email,
      msg

    })
    return data
  }
  catch (error) {
    console.log(error)
    return error
  }
}