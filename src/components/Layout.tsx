import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
