"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MyContext } from "@/context/context";

export default function UserProfile({ params }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState({});

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      // toast.error(error.message);
    }
  };

  const getUser = async () => {
    // console.log(params.id);
    const response = await axios.post("/api/users/currentuser", {
      _id: params.id,
    });
    console.log(response.data.data);
    setCurrentUser(response.data.data);
  };

  useEffect(() => {
    getUser();
    toast.success("Successfully logged In", { duration: 5000 });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-serif">
      <Toaster position="top-right" />
      <h1 className="bg-slate-400 text-4xl p-4 mb-4 rounded-xl text-slate-950 font-bold">
        Profile
      </h1>
      <hr />
      <label htmlFor="username" className="text-xl">
        Username
      </label>
      <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white min-w-[300px] text-center">
        {currentUser.username}
      </div>
      <label htmlFor="password" className="text-xl">
        Email
      </label>
      <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white min-w-[300px] text-center">
        {currentUser.email}
      </div>

      <button
        onClick={logout}
        className="bg-slate-400 text-lg p-2 my-4 rounded-xl text-slate-950 font-bold hover:text-white hover:bg-slate-700"
      >
        Logout
      </button>
    </div>
  );
}
