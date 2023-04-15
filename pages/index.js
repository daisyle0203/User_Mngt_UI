import AddUser from "@/components/AddUser"
import Login from "@/components/Login"
import Navbar from "@/components/Navbar"
import { getSession } from "next-auth/react"
import Head from "next/head"

export default function Home({ session }) {
  if (!session) return <Login />

  return (
    <>
      <Head>
        <title>User Management System</title>
      </Head>
      <Navbar />
      <main>
        <AddUser />
      </main>
    </>
  )
}

// Function to get the session object
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session },
  }
}
