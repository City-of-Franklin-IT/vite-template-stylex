import { createContext, useState } from "react"

const HistoryContext = createContext()

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([])

  const pushHistory = (location) => setHistory([ location, ...history ])

  const clearHistory = () => {
    setHistory([])
  }

  return (
    <HistoryContext.Provider
      value={{
        history, 
        pushHistory,
        clearHistory
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}

export default HistoryContext