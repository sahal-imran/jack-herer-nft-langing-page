import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      lgBig: 1600,
      xl: 1600,
      xxl: 1700,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
       <ThemeProvider theme={theme}>
        <TopBar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}