import * as stylex from '@stylexjs/stylex'
import styles from './Layout.stylex'

// Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {
  return (
    <div { ...stylex.props(styles.layout) }>
      <Header />
      <main>
        <div { ...stylex.props(styles.container) }>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout