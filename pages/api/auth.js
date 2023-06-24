import '../../axios'
import axios from "axios"


export const login = async (email, password) => {
  try {
    const { data } = await axios.post('/auth/login', {
      email,
      password
    })
    const { token } = data
    console.log(token)
    return token
  } catch (error) {
    console.log(error)
    return error
  }
}