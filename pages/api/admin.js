import '../../axios'
import axios from 'axios'

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