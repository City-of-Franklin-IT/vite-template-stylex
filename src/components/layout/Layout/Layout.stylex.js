import * as stylex from '@stylexjs/stylex'

export default stylex.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh"
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "100%",
    margin: "auto",
    padding: "50px 10px 80px 10px",
    '@media (min-width: 1920px)': {
      width: "70%"
    }
  }
})