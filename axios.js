import axios from 'axios'

axios.defaults.baseURL = 'https://prateeks-blog.onrender.com/api/v1'

// axios.interceptors.request.use(function (req) {
//   const token = localStorage && localStorage.getItem('token')
//     ? 'Bearer ' + localStorage.getItem('token')
//     : null
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`
//   }
//   return req
// })