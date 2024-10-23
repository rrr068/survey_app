'use client'

import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
  return (
  <header className="fixed top-0 right-0 w-full bg-blue-500 text-white h-16 flex items-center justify-between px-4 shadow-md z-50">

    <nav className="flex space-x-4">
      <Link href="/about">
        About
      </Link>
      <Link href="/survey">
        Survey
      </Link>
      <Link href="/dm">
        DM
      </Link>
      <Link href="/all">
        All
      </Link>
      <Link href="/login">
        Login
      </Link>
    </nav>
  </header>
  )
}

export default Header