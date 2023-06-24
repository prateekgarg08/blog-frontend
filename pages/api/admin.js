import '../../axios'
import axios from 'axios'

if (typeof window !== "undefined") {

  axios.interceptors.request.use(function (req) {
    console.log("here")
    const token = localStorage && localStorage.getItem('token')
      ? 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      : null
    if (token) {
      req.headers.authorization = token
    }
    return req
  })
}


export const getAllPosts = async () => {
  try {
    const { data } = await axios.get('/admin')
    return data
  }
  catch (err) {
    // console.log(err)
    return err
  }
}
export const newPost = async (title, description, file) => {
  try {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('file', file)
    const { data } = await axios.post('/admin', formData)
    return data
  }
  catch (err) {
    // console.log(err)
    return err
  }
}
export const updatePost = async (slug, userInput) => {
  const { data } = await axios.put(`/admin/post/${slug}`, userInput)
  return data
}
export const deletePost = async (slug) => {
  const { data } = await axios.delete(`/admin/post/${slug}`)
  return data
}