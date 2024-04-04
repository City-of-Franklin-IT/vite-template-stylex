import { createContext, useReducer } from "react"
import appReducer from './AppReducer'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const initalState = {}

  const [state, dispatch] = useReducer(appReducer, initalState)

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext