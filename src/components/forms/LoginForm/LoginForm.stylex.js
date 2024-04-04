import * as stylex from '@stylexjs/stylex'
import { colors } from '../../../stylex/styles.stylex'

export default stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "12px"
  },
  title: {
    fontSize: "2.25rem",
    color: colors.neutral,
    fontFamily: "'Teko', sans-serif",
    fontWeight: 400,
    maxWidth: "80%",
    margin: "auto",
    textAlign: "center"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    padding: "12px"
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    margin: "24px",
  },
  label: {
    fontFamily: "'Jura', sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 800,
    fontSize: "1rem",
    fontStyle: "normal",
    color: colors.neutral,
    width: "30%",
    padding: "10px 0"
  },
  input: {
    width: "100%",
    padding: "12px 0",
    textIndent: "1rem"
  },
  button: {
    textTransform: "uppercase",
    width: "92%",
    height: "44px",
    color: colors.neutralContent,
    backgroundColor: colors.primary,
    margin: "auto"
  },
  buttonHovered: {
    cursor: "pointer",
    color: colors.neutralContent,
    backgroundColor: colors.neutral,
  },
  error: {
    textTransform: "uppercase",
    fontFamily: "'Jura', sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 800,
    fontSize: "1rem",
    fontStyle: "normal",
    color: colors.warning,
    marginLeft: "auto",
    backgroundColor: colors.b3,
    padding: "2px 4px"
  }
})