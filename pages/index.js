import Head from 'next/head'

function Home() {
  return(
    <>
      <Head>
        <title>Welcome to Horizon</title>
      </Head>
      <div className="flex-none w-screen h-screen">
        <div className="m-auto w-xl">
          <h1 className="text-3xl font-bold underline">Welcome to Horizon</h1>
        </div>
      </div>
    </>
  )
}
