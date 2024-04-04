import * as stylex from '@stylexjs/stylex'
import styles from './Footer.stylex'

function Footer() {
  return (
    <footer { ...stylex.props(styles.footer) }>
      <p { ...stylex.props(styles.text) }>Developed by City of Franklin Information Technology</p>
    </footer>
  )
}
export default Footer