import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"

export function Layout({ children, showNav = true }) {
  return (
    <div>
      <SkipNavLink />
      {showNav && <Header />}
      {/* <Header /> */}
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
    </div>
  )
}
