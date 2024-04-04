import * as stylex from '@stylexjs/stylex'
import { colors } from '../../../stylex/styles.stylex'

export default stylex.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    height: "fit-content",
    padding: "4px 30px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    letterSpacing: ".25rem",
    lineHeight: ".35rem"
  },
  h1: {
    color: "#FFFFFF",
    fontFamily: "'Play', sans-serif",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  h2: {
    color: "#FFFFFF",
    fontFamily: "'Play', sans-serif",
    fontSize: ".85rem",
    textAlign: "center",
    textIndent: "2rem"
  }
})