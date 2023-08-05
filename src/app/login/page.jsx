"use client";

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MyContext } from "@/context/context";

export default function LoginPage() {
  const router = useRouter();
  const { globalUser, setGlobalUser } = useContext(MyContext);

  const { successNotify, errorNotify } = useContext(MyContext);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      const id = response.data.data._id;
      // const mailResponse = await axios.get("/api/users/testmail");
      // console.log(mailResponse);
      setGlobalUser({
        email: user.email,
        password: user.password,
      });
      router.push(`/profile/${id}`);
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  useEffect(() => {
    if (globalUser.email != "") {
      toast.success("Successfully logged out", { duration: 5000 });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-serif">
      <Toaster position="top-right" />
      <h1 className="bg-slate-400 text-4xl p-4 mb-4 rounded-xl text-slate-950 font-bold">
        {loading ? "Processing" : "Login"}
      </h1>
      <hr />

      <label htmlFor="email" className="text-xl">
        Email
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black min-w-[300px]"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password" className="text-xl">
        Password
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black min-w-[300px]"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="bg-slate-400 text-lg p-2 my-4 rounded-xl text-slate-950 font-bold hover:text-white hover:bg-slate-700"
      >
        Login here
      </button>
      <Link href="/signup">Visit Signup page</Link>
    </div>
  );
}
