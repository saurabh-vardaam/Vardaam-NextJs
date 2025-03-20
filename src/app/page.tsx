// import Image from "next/image";
import Layout from "./Components/layout"
import PageContent from "./Components/PageContent"

export default async function generateStaticParams() {
  const res = await fetch(`https://vardaam-site-backend.test/pages/9e7986be-c01c-467b-a0a8-1ff6e9c54369`, {
    headers: {
      'Cache-Control': 'no-store'
    },
    next: { revalidate: 0 }, 
  });
  const pages = await res.json();

  return (
    <>
      <Layout>
        <PageContent page={pages} scrollReveal={false} />
      </Layout>
    </>
  )
}
