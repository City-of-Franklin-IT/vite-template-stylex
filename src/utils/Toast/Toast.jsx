import { toast } from 'react-toastify'
import * as stylex from '@stylexjs/stylex'
import styles from './Toast.stylex'

// Icons
import savedIcon from '../../assets/icons/saved/saved.svg'
import authIcon from '../../assets/icons/auth/auth.svg'
import infoIcon from '../../assets/icons/info/info.svg'
import errorIcon from '../../assets/icons/error/error.svg'

export const savedPopup = (msg) => { // Saved popup
  const content = (
    <div { ...stylex.props([styles.popup, styles.savedPopup]) }>
      <img src={savedIcon} alt="saved icon" { ...stylex.props(styles.icon) } />
      <p>{msg}</p>
    </div>
  )

  toast(content, {
    closeButton: false,
    autoClose: 5000,
    position: "bottom-center",
    theme: "transparent",
    closeOnClick: true
  })
}

export const errorPopup = (msg) => { // Error popup
  const content = (
    <div { ...stylex.props([styles.popup, styles.errorPopup]) }>
      <img src={errorIcon} alt="error icon" { ...stylex.props(styles.icon) } />
      <p style={{ margin: "auto" }}>{msg || "Error"}</p>
    </div>
  )

  toast(content, {
    closeButton: false,
    autoClose: 5000,
    position: "bottom-center",
    theme: "transparent",
    closeOnClick: true
  })
}

export const authPopup = () => { // Authentication popup
  const content = (
    <div { ...stylex.props([styles.popup, styles.authPopup]) }>
      <img src={authIcon} alt="auth icon" { ...stylex.props(styles.icon) } />
      <p>Authenticated</p>
    </div>
  )

  toast(content, {
    closeButton: false,
    autoClose: 5000,
    position: "bottom-center",
    theme: "transparent",
    closeOnClick: true
  })
}

export const infoPopup = (msg) => { // Info popup
  const content = (
    <div { ...stylex.props([styles.popup, styles.infoPopup]) }>
      <img src={infoIcon} alt="info icon" { ...stylex.props(styles.icon) } />
      <p>{msg}</p>
    </div>
  )

  toast(content, {
    closeButton: false,
    autoClose: 5000,
    position: "bottom-center",
    theme: "transparent",
    closeOnClick: true
  })
}