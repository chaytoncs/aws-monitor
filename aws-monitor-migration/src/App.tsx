import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Login from "./login/pages/Login"
import Dashboard from "./dashboard/pages/Dashboard"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import { CssBaseline } from "@mui/material"
import "./fonts"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
