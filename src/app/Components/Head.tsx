import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import parse from "html-react-parser"

export const Head = () => {
//   const { wp } = useStaticQuery(
//     graphql`
//       query NewQuery {
//         wp {
//           siteSettings {
//             siteSettings {
//               headerScripts
//               bodyScripts
//             }
//           }
//         }
//       }
//     `
//   )

  // const siteSettings = wp.siteSettings.siteSettings
  return (
    <>
      {/* <head>
        {parse(siteSettings.headerScripts)}
      </head>
      {data?.page?.schemaTags?.schemaScript &&
        parse(data.page.schemaTags.schemaScript)}
      <body>{parse(siteSettings.bodyScripts)}</body> */}

      <h1>Head</h1>
    </>
  )
}
