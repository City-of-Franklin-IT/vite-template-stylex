import * as stylex from '@stylexjs/stylex'
import { colors } from '../../stylex/styles.stylex'

export default stylex.create({
  container: {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    margin: "60px auto",
    backgroundColor: colors.neutralContent,
    borderRadius: "14px",
    overflow: "hidden",
  }
})