'use client'
import { Dialog,  } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import BrandLogo from "./BrandLogo"
import NextLink from "./Widgets/NextLink"


import { useEffect, useState } from "react"


export default function HeaderBar() {

  
  const defaultTitle = 'default title'

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`lg:fixed w-full z-50 py-0.5 ${
        isScrolled ? "bg-white border-b border-gray-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav
        className="sticky top-0 z-50 mx-auto flex max-w-8xl xl:max-w-7xl items-center justify-between max-sm:pb-0 lg:px-8 px-3"
        aria-label="Global"
      >
        <NextLink href="/" className="-m-1.5 p-1.5 ">
          <span className="sr-only">{defaultTitle}</span>
          <BrandLogo className="" />
        </NextLink>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 items-center">
         
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-2 lg:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NextLink href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{defaultTitle}</span>
              <BrandLogo className="mt-1 ml-[8px]" />
            </NextLink>
            <button
              type="button"
              className="-m-2 rounded-md p-1.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
  
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

