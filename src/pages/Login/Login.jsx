import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { useGetToken } from '../../custom-hooks'
import styles from './Login.stylex'

// Components
import Layout from '../../components/layout/Layout/Layout'
import LoginForm from '../../components/forms/LoginForm/LoginForm'

function Login() {
  const token = useGetToken()

  const navigate = useNavigate()

  const redirectHome = useCallback(() => {
    if(token) { // If token - redirect to Home page
      navigate('/home')
    }
  }, [token])

  useEffect(() => {
    redirectHome()
  }, [token])

  return (
    <Layout>
      <div { ...stylex.props(styles.container) }>
        <LoginForm />
      </div>
    </Layout>
  )
}

export default Login