import { createTheme, PaletteOptions } from "@mui/material/styles"
import { fontFamily } from "./fonts"

const colors = {
  richBlack: "#111827",
  oxfordBlue: "#131a2b",
  seasalt: "#f9fafb",
  spaceCadet: "#1f2a47",
  blueNCS: "#008ab8",
  blueViolet: "#8a2be2",
  taupeGray: "#84828f",
  skyBlue: "#00b8f5",
}

declare module "@mui/material/styles" {
  interface Palette {
    custom: typeof colors
  }
  interface PaletteOptions {
    custom?: typeof colors
  }
  interface Theme {
    gradients: {
      main: string
      galaxy: string
    }
  }
  interface ThemeOptions {
    gradients?: {
      main?: string
      galaxy?: string
    }
  }
}

const palette: PaletteOptions = {
  background: {
    default: colors.richBlack,
  },
  custom: colors,
}

const theme = createTheme({
  palette,
  gradients: {
    main: `linear-gradient(
      180deg,
      ${colors.richBlack} 0%,
      ${colors.oxfordBlue} 25%,
      ${colors.spaceCadet} 100%
    )`,
    galaxy: `linear-gradient(to right, ${colors.blueNCS}, ${colors.blueViolet})`,
  },
  typography: {
    fontFamily: fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          height: "100vh",
          width: "100vw",
        },
      },
    },
  },
})

export default theme
