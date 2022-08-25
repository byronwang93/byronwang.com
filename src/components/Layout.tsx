import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../assets/css/main.css"
import { ChakraProvider } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  )
}

export default Layout
