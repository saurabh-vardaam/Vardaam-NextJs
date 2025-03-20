import React from "react"
import Link from "next/link"

const NotFoundPage = ({ }) => {

  return (
      <div className="bg-slate-100">
        <div className="w-7/12 m-auto py-16 flex items-center justify-center max-md:w-8/12 max-sm:w-11/12">
          <div className="bg-white shadow overflow-hidden rounded-lg pt-6 pb-10 w-full max-sm:px-3">
            <div className=" border-gray-200 text-center">
              <h1 className="text-9xl font-bold text-varblue-100 max-md:text-7xl">
                404
              </h1>
              <h1 className="text-4xl py-8 max-md:text-3xl max-sm:py-4 max-sm:text-xl">
                oops! Page not found
              </h1>
              <p className="text-sm pb-8 px-12 font-medium max-sm:px-0 max-sm:pb-4">
                Oops! The page you are looking for does not exist.
                <br className="max-sm:hidden"></br> It might have been moved or
                deleted.
              </p>
              <Link
                href="/"
                className="inline-flex justify-center rounded text-sm font-medium py-2 px-8 bg-white text-varblue-300 ring-1 ring-varblue-300 hover:bg-indigo-100 hover:shadow-lg"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NotFoundPage
