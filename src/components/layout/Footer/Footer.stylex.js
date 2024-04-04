import * as stylex from '@stylexjs/stylex'
import { colors } from '../../../stylex/styles.stylex'

export default stylex.create({
  footer: {
    display: "flex",
    flexDirection: "column",
    height: "14vh",
    backgroundColor: colors.b3,
    marginTop: "auto"
  },
  text: {
    margin: "auto",
    color: colors.primaryContent,
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: "500",
    fontSize: "1rem",
    letterSpacing: ".4rem"
  }
})