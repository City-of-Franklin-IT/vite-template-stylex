import { useCookies } from "react-cookie"

export const useGetToken = () => { // Return jwt from cookie user object
  const [cookies] = useCookies(["user"])

  const { user } = cookies

  if(user) {
    return user.token
  }
}

export const useGetRole = () => { // Return logged in user role
  const [cookies] = useCookies(["user"])

  const { user } = cookies

  if(user) {
    return user.role
  }
}