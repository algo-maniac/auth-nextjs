"use client";

import React, { useState, useEffect } from "react";

export default function TransactionIcon(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="border-2 h-[400px] w-[22%] m-6 rounded-2xl bg-slate-950 flex-col justify-center">
      <div id="heading" className=" h-[20%] text-[15px] text-center p-3">
        Transaction Name: {props.transaction_name}
      </div>
      <div id="description1" className="h-[13%] text-[15px] text-center p-3">
        Member 1: {props.user1_email}
      </div>
      <div id="val1" className="h-[13%] text-[15px] text-center p-3">
        Paid: {props.user1_val}
      </div>
      <div id="description2" className="h-[13%] text-[15px] text-center p-3">
        Member 2: {props.user2_email}
      </div>
      <div id="val2" className="h-[13%] text-[15px] text-center p-3">
        Paid: {props.user2_val}
      </div>
      <div id="description3" className="h-[13%] text-[15px] text-center p-3">
        Member 3: {props.user3_email}
      </div>
      <div id="val3" className="h-[13%] text-[15px] text-center p-3">
        Paid: {props.user3_val}
      </div>
    </div>
  );
}
