"use client";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { MyContext } from "@/context/context";

export default function ProfilePage() {
  const router = useRouter();
  const { globalUser, setGlobalUser } = useContext(MyContext);

  const [userData, setUserData] = useState("nothing");
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      if (userData === "nothing") {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setUserData(res.data.data);
      }
    } catch (error) {
      console.log("Can't get request from api/user/me");
    }
  };

  useEffect(() => {
    if (globalUser.email != "") {
      toast.success(`Hello user ${globalUser.email}`, { duration: 5000 });
    }
    getUserDetails();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster position="top-right" />
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="p-1 rounded bg-green-500">
        {userData === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${userData._id}`}>
            Click to go to your profile
          </Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
