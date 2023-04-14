import AddUser from "@/components/AddUser"
import Navbar from "@/components/Navbar"
import Head from "next/head"

export default function Home() {
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
