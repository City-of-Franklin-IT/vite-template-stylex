import { Link } from 'react-router-dom'
import * as stylex from '@stylexjs/stylex'
import { APP_TITLE } from '../../../config'
import styles from './Header.stylex'

function Header() {
  return (
    <header { ...stylex.props(styles.header) }>
      <Link to={'/projects'} style={{ textDecoration: "none" }}>
        <div { ...stylex.props(styles.title) }>
          <h1 { ...stylex.props(styles.h1) }>City of Franklin</h1>
          <h2 { ...stylex.props(styles.h2) }>{APP_TITLE}</h2>
        </div>
      </Link>
    </header>
  )
}
export default Header