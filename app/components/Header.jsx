'use client'
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { BiCart } from "react-icons/bi";
import { useSession } from "next-auth/react";
const Header = () => {
    const {data:session}=useSession();
  const navigation = [
    {
      _id: 1,
      title: "Phone",
      href: "/phone",
    },
    {
      _id: 2,
      title: "Phone Case",
      href: "/phonecase",
    },
    {
      _id: 3,
      title: "Watches",
      href: "/watches",
    },
    {
      _id: 4,
      title: "Accessories",
      href: "/accessories",
    },
  ];
  return (
    <div className="w-full h-20 bg-gray-950 text-gray-200 sticky-top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-5">
        {navigation.map((item) => (
          <Link
            href={item?.href}
            key={item?._id}
            className="uppercase text-sm hover:text-white duration-200"
          >
            {item?.title}
          </Link>
        ))}
        <Link href={"/cart"}>
          <BiCart />
        </Link>
        <div className="mr-20 text-green-400"><h3>Hello,{session?.user?.name}</h3></div>
        <button onClick={()=>signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3 ml-20">Logout</button>
      </div>
    </div>
  );
};
export default Header;
