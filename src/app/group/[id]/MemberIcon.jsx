"use client";

import React, { useState, useEffect } from "react";

export default function MemberIcon(props) {
  const [member, setMember] = useState({});
  useEffect(() => {
    console.log(props.name);
  }, []);
  return (
    <div className="border-2 h-[150px] w-[20%] m-6 rounded-2xl bg-slate-950 flex-col">
      <div id="heading" className=" h-[30%] text-[15px] text-center pt-3">
        Name: {props.name}
      </div>
      <div id="description" className="h-[30%] text-[15px] text-center pt-3">
        Email: {props.email}
      </div>
      <div id="upi_id" className="h-[30%] text-[15px] text-center pt-3">
        Upi Id: {props.upi_id}
      </div>
    </div>
  );
}
