"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AddMember({ id }) {
  const [member, setMember] = useState({
    groupId: "",
    name: "",
    email: "",
    upi_id: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(member);
    const response = await axios.post("/api/group/addmember", member);
    console.log(response.data.data);
  };

  useEffect(() => {
    console.log({ id });
    setMember({ ...member, groupId: id });
  }, []);
  return (
    <div className="border-2 m-6 rounded-2xl bg-slate-950 h-[420px] flex-col justify-center">
      <div
        id="heading"
        className="uppercase text-[20px] text-center p-4 font-serif"
      >
        Add a Member
      </div>
      <form className="h-[300px] flex-col justify-center">
        <div id="name" className="h-[33%] p-4 text-lg font-serif ml-2 ">
          Member Name
          <input
            type="text"
            className="p-[4px] text-black rounded-lg w-[90%]"
            value={member.name}
            onChange={(e) => {
              setMember({ ...member, name: e.target.value });
            }}
          />
        </div>
        <div id="email" className="h-[33%] p-4 text-lg font-serif ml-2 ">
          Email
          <input
            type="email"
            className="p-[4px] text-black rounded-lg  w-[90%]"
            value={member.email}
            onChange={(e) => {
              setMember({ ...member, email: e.target.value });
            }}
          />
        </div>

        <div id="upi id" className="h-[33%] p-4 text-lg font-serif ml-2 ">
          Upi Id
          <input
            type="text"
            className="p-[4px] text-black rounded-lg  w-[90%]"
            value={member.upi_id}
            onChange={(e) => {
              setMember({ ...member, upi_id: e.target.value });
            }}
          />
        </div>
        <button
          className="h-12 text-2xl ml-[30%] border-4 rounded-xl w-[100px] cursor-pointer"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
