import { useState } from "react"
import { useImage } from 'react-image'
import { useCookies } from "react-cookie"
import { useForm, Controller } from "react-hook-form"
import * as stylex from '@stylexjs/stylex'
import { authPopup, errorPopup } from '../../../utils/Toast/Toast'
import { loginUser, getUser } from '../../../context/App/AppActions'
import image from '../../../assets/icons/login/cof.jpeg'
import { APP_TITLE } from "../../../config"
import styles from './LoginForm.stylex'

function LoginForm() {
  const [cookies, setCookie] = useCookies(["user"])

  const [state, setState] = useState({ hovered: false })

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
      defaultValues: {
        email :'',
        password: ''
      }
    })

  const { src } = useImage({
    srcList: image
  })

  const onSubmit = async (data) => { // Handle login form submit
    const result = await loginUser(data)

    if(result.success) { // Set user cookie
      getUser(result.token)
        .then(user => setCookie("user", { ...user.data, token: result.token }))
        .then(_ => {
          authPopup()
        })
    } else return errorPopup(result.msg)
  }
  
  return (
    <div { ...stylex.props(styles.container) }>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={src} alt="cof logo" />
        <div { ...stylex.props(styles.body) }>
          <h1 { ...stylex.props(styles.title) }>{APP_TITLE}</h1>
          <Controller
            name="email"
            control={control}
            rules={{
              required: { value: true, message: "Email is required" }
            }}
            render={({ field }) => (
              <div { ...stylex.props(styles.inputSection) }>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="email" { ...stylex.props(styles.label) }>Email</label>
                  <input type="email" { ...stylex.props(styles.input) } { ...field } />
                </div>
                {errors.email && <span { ...stylex.props(styles.error) }>{errors.email.message}</span>}
              </div>
            )} />
          <Controller
            name="password"
            control={control}
            rules={{
              required: { value: true, message: "Password is required" }
            }}
            render={({ field }) => (
              <div { ...stylex.props(styles.inputSection) }>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="password" { ...stylex.props(styles.label) }>Password</label>
                  <input type="password" { ...stylex.props(styles.input) } { ...field } />
                </div>
                {errors.password && <span { ...stylex.props(styles.error) }>{errors.email.password}</span>}
              </div>
            )} />
          <button 
            type="submit"
            onMouseEnter={() => setState({ hovered: true })}
            onMouseLeave={() => setState({ hovered: false })}
            disabled={!isValid && true}
            { ...stylex.props(state.hovered ? [styles.button, styles.buttonHovered] : styles.button) }>
              Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm