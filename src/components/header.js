/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Header(props) {
  return (
    <header
      sx={{
        // this uses the value from `theme.space[4]`
        padding: 3,
        // these use values from `theme.colors`
        color: "#11ee11",
        backgroundColor: "#000000",
      }}
    >
      {props.children}
    </header>
  )
}
