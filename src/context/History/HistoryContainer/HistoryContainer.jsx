import { useContext, useEffect } from "react"
import { useLocation, Outlet } from "react-router"
import HistoryContext from "../HistoryContext"

function HistoryContainer() {
  const { pushHistory } = useContext(HistoryContext)

  const location = useLocation()

  useEffect(() => {
    pushHistory(location.pathname)
  }, [location])

  return <Outlet />
}

export default HistoryContainer