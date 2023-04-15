import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"

const Navbar = () => {
  const { data: session, status } = useSession()
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-bold flex-auto">User Management System</p>
        {session && (
          <div className="flex items-center sm:space-x-2 justify-end">
            <Image
              className="rounded-full cursor-pointer"
              src={session?.user?.image}
              height={30}
              width={30}
              alt="User Image"
            ></Image>
            <p className="text-white font-bold">{session?.user.name}</p>
            <button
              onClick={() => signOut()}
              className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 hover:cursor-pointer px-6 py-2"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
