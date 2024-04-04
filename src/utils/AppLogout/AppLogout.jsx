import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useCookies } from 'react-cookie'

function AppLogout({ children }) {
  const [cookies, removeCookie] = useCookies(["user"])

  const navigate = useNavigate()

  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress"
  ]

  let timer

  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer()

      Object.values(events).forEach(item => {
        window.removeEventListener(item, resetTimer)
      })

      logoutAction()
    }, 1800000) // Thirty minutes
  }

  const resetTimer = () => {
    if(timer) {
      clearTimeout(timer)
    }
  }

  const logoutAction = () => {
    navigate('/login')

    return setTimeout(() => removeCookie('user', {}, { path: '/' }), 500)
  }

  useEffect(() => {
    Object.values(events).forEach(item => {
      window.addEventListener(item, () => {
        resetTimer()
        handleLogoutTimer()
      })
    })
  }, [])

  return children
}

export default AppLogout