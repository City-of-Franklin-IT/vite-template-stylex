import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppProvider } from './context/App/AppContext'
import { HistoryProvider } from './context/History/HistoryContext'
import { CookiesProvider } from 'react-cookie'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from "react-toastify"
import { APP_BASE } from "./config"
import 'react-toastify/dist/ReactToastify.css'

// Components
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AppLogout from './utils/AppLogout/AppLogout'
import HistoryContainer from '../src/context/History/HistoryContainer/HistoryContainer'

const queryClient = new QueryClient()

function App() {
  return (
    <CookiesProvider>
      <HistoryProvider>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <Router basename={APP_BASE} future={{ v7_startTransition: true }}>
              {/* <AppLogout> */}
                <Routes>
                  <Route path="/" element={<HistoryContainer />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                  </Route>
                </Routes>
              {/* </AppLogout> */}
            </Router>
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </AppProvider>
      </HistoryProvider>
    </CookiesProvider>
  )
}

export default App