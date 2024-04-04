import * as stylex from '@stylexjs/stylex'
import { colors } from '../../stylex/styles.stylex'

export default stylex.create({
  popup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    color: "#FFFFFF",
    fontFamily: "'Play', sans-serif",
    fontWeight: 600,
    fontSize: "1.3rem",
    textTransform: "uppercase",
    textAlign: "center",
    alignItems: "center",
    padding: "12px 24px"
  },
  savedPopup: {
    backgroundColor: colors.success
  },
  errorPopup: {
    backgroundColor: colors.b3
  },
  authPopup: {
    backgroundColor: colors.success,
  },
  infoPopup: {
    backgroundColor: colors.infoContent
  },
  icon: {
    height: "60px",
    width: "60px"
  }
})