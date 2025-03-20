'use client'
import { Dialog,  } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  // ChevronDownIcon,
  // ChevronRightIcon,
} from "@heroicons/react/24/outline"
import BrandLogo from "./BrandLogo"
// import _ from "lodash"
import NextLink from "./Widgets/NextLink"


import { useEffect, useState } from "react"

// const flatListToHierarchical = (
//   data: [] = [],
//   { idKey = "id", parentKey = "parentId", childrenKey = "childItems" } = {}
// ): [] => {
//   const tree: any[] = []
//   const childrenOf: { [key: string]: [] } = {}

//   data.forEach(item => {
//     const newItem = { ...item }
//     const { [idKey]: id, [parentKey]: parentId = 0 } = newItem

//     childrenOf[id] = childrenOf[id] || []
//     newItem[childrenKey] = childrenOf[id]

//     if (parentId) {
//       childrenOf[parentId] = childrenOf[parentId] || []
//       childrenOf[parentId].push(newItem)
//     } else {
//       tree.push(newItem)
//     }
//   })

//   return tree
// }

export default function HeaderBar() {

  // const navigation = _.sortBy(
  //   // flatListToHierarchical([]),
  //   "order"
  // )
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
          {/* {navigation.map(item => (
            <NavItem item={item} key={item.id} location={location} />
          ))} */}
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
                {/* {navigation.map(item => (
                  <MobileNavItem
                    item={item}
                    key={item.id}
                    location={location}
                  />
                ))} */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

// function NavItem({ item, rightOpen = false, location }) {
//   if (item.childItems.length > 0) {
//     return (
//       <Popover className="relative">
//         {({ open }) => (
//           <>
//             <Popover.Button
//               className={`text-left inline-flex py-2 text-[14px] text-base-BLA200 items-center ${
//                 rightOpen
//                   ? "justify-between w-full p-2 rounded-lg text-base-BLA200"
//                   : "gap-x-1 text-sm leading-6 text-base-BLA200 uppercase hover:border-b hover:border-base-YEL100"
//               }`}
//             >
//               <span>{item.label}</span>
//               {rightOpen ? (
//                 <ChevronRightIcon className={`h-5 w-5`} aria-hidden="true" />
//               ) : (
//                 <ChevronDownIcon
//                   className={`h-4 w-4 ${open ? "rotate-180" : ""}`}
//                   aria-hidden="true"
//                 />
//               )}
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel
//                 className={`absolute z-10 flex w-screen max-w-min ${
//                   !rightOpen
//                     ? "mt-5 left-0"
//                     : item.menuItemSettings.openTo === "right"
//                     ? "ml-3 -mt-10 left-full"
//                     : "mr-3 -mt-10 right-full"
//                 }`}
//               >
//                 <div className="w-56 shrink rounded-lg bg-white p-2.5 text-sm leading-6 text-base-BLA200 shadow-lg ring-1 ring-gray-900/5">
//                   {item.uri !== "#" && (
//                     <NextLink
//                       key={item.id}
//                       href={item.uri}
//                       className={`block p-2 rounded-lg  ${
//                         location && item.uri === location.pathname
//                           ? "text-varblue-100"
//                           : "text-base-BLA200"
//                       }`}
//                     >
//                       {item.label}
//                     </NextLink>
//                   )}
//                   {/* {_.sortBy(item.childItems, "order").map(item => (
//                     <NavItem
//                       item={item}
//                       rightOpen={true}
//                       key={item.id}
//                       location={location}
//                     />
//                   ))} */}
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </>
//         )}
//       </Popover>
//     )
//   }

//   if (item.menuItemSettings.megaMenu && item.menuItemSettings.menuContent) {
//     return (
//       <Popover>
//         {({ open }) => (
//           <>
//             <Popover.Button className="inline-flex items-center gap-x-1 text-sm leading-6 text-base-BLA200 uppercase hover:border-b hover:border-base-YEL100 py-2">
//               <span>{item.label}</span>
//               <ChevronDownIcon
//                 className={`h-4 w-4 text-base-BLA200 ${
//                   open ? "rotate-180" : ""
//                 }`}
//                 aria-hidden="true"
//               />
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute left-0 z-10 mt-5 flex w-full">
//                 <div className="rounded-lg bg-white w-full p-2.5 text-sm leading-6 text-base-BLA200 shadow-lg ring-1 ring-gray-900/5">
//                   <PageContent page={item.menuItemSettings.menuContent} />
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </>
//         )}
//       </Popover>
//     )
//   }

//   return (
//     <NextLink
//       key={item.id}
//       href={item.uri}
//       target={item.target}
//       className={`
//       ${
//         rightOpen
//           ? "block p-2"
//           : "text-sm leading-6 py-2 uppercase hover:border-b hover:border-base-YEL100"
//       }
//       ${
//         item.menuItemSettings.menuStyle === "button_colored"
//           ? "px-3 transition-all hover:border-none text-white bg-base-BLU200 hover:ring-1 hover:text-base-BLA200 hover:ring-base-BLA200 hover:bg-white rounded"
//           : ""
//       }
//       ${
//         location && item.uri === location.pathname
//           ? "text-varblue-100"
//           : "text-base-BLA200"
//       }
//     `}
//     >
//       {item.label}
//     </NextLink>
//   )
// }

// function MobileNavItem({ item, location }) {
//   if (item.childItems.length > 0) {
//     return (
//       <Disclosure>
//         {({ open }) => (
//           <>
//             <Disclosure.Button
//               className={`flex w-full items-center text-left justify-between rounded-md px-3 py-2 text-base leading-7 ${
//                 item.menuItemSettings.menuStyle === "button_colored"
//                   ? "bg-varblue-100 ring-1 ring-varblue-100 text-white hover:bg-white hover:text-varblue-100"
//                   : " text-base-BLA200"
//               }`}
//             >
//               <span>{item.label}</span>
//               <ChevronDownIcon
//                 className={`h-4 w-4 ${open ? "rotate-180" : ""}`}
//                 aria-hidden="true"
//               />
//             </Disclosure.Button>
//             <Disclosure.Panel className="ms-4 max-md:ms-0 text-base-BLA300 max-md:bg-slate-100 max-md:py-2 max-md:!mt-0">
//               {item.uri !== "#" && (
//                 <NextLink
//                   key={item.id}
//                   href={item.uri}
//                   className={`block rounded-md px-3 py-2 text-base leading-7 outline-none ${
//                     item.menuItemSettings.menuStyle === "button_colored"
//                       ? "bg-varblue-100 ring-1 ring-varblue-100 text-white hover:bg-white hover:text-varblue-100"
//                       : " text-base-BLA200"
//                   }`}
//                 >
//                   <span>{item.label}</span>
//                 </NextLink>
//               )}
//               {_.sortBy(item.childItems, "order").map(item => (
//                 <MobileNavItem item={item} rightOpen={true} key={item.id} />
//               ))}
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     )
//   }

//   if (item.menuItemSettings.megaMenu && item.menuItemSettings.menuContent) {
//     return (
//       <Disclosure>
//         {({ open }) => (
//           <>
//             <Disclosure.Button
//               className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base leading-7 ${
//                 item.menuItemSettings.menuStyle === "button_colored"
//                   ? "bg-varblue-100 ring-1 ring-varblue-100 text-white hover:bg-white hover:text-varblue-100"
//                   : " text-base-BLA200"
//               }`}
//             >
//               <span>{item.label}</span>
//               <ChevronDownIcon
//                 className={`h-4 w-4 ${open ? "rotate-180" : ""}`}
//                 aria-hidden="true"
//               />
//             </Disclosure.Button>
//             <Disclosure.Panel className="text-gray-500 ms-4 max-md:ms-0 max-md:!mt-0">
//               <PageContent page={item.menuItemSettings.menuContent} />
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     )
//   }

//   return (
//     <NextLink
//       key={item.id}
//       href={item.uri}
//       className={`block rounded-md px-3 py-2 text-base leading-7 outline-none ${
//         item.menuItemSettings.menuStyle === "button_colored"
//           ? "bg-varblue-100 ring-1 ring-varblue-100 text-white hover:bg-white hover:text-varblue-100 text-center max-sm:!mt-5"
//           : " text-base-BLA200"
//       }`}
//     >
//       <span>{item.label}</span>
//     </NextLink>
//   )
// }
