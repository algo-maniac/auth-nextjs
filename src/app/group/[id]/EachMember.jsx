"use client";

import React, { useState, useEffect } from "react";
export default function EachMember({
  memberId,
  transactionDetails,
  setTransactionDetails,
}) {
  const [memberDetails, setMemberDetails] = useState({ email: "", value: "" });

  useEffect(() => {
    if (memberId === "1") {
      setTransactionDetails({
        ...transactionDetails,
        user1_transactions: memberDetails,
      });
    } else if (memberId === "2") {
      setTransactionDetails({
        ...transactionDetails,
        user2_transactions: memberDetails,
      });
    } else if (memberId === "3") {
      setTransactionDetails({
        ...transactionDetails,
        user3_transactions: memberDetails,
      });
    }
    console.log(transactionDetails);
  }, [memberDetails]);

  return (
    <div id="member" className="h-[33%] p-4 text-lg font-serif ml-2 ">
      Member {memberId}
      <div id="email" className="mt-4">
        Email
      </div>
      <input
        type="email"
        className="p-[4px] text-black rounded-lg  w-[90%]"
        value={memberDetails.email}
        onChange={(e) => {
          setMemberDetails({ ...memberDetails, email: e.target.value });
        }}
      />
      <div id="value" className="mt-4">
        Value
      </div>
      <input
        type="number"
        className="p-[4px] text-black rounded-lg  w-[90%]"
        value={memberDetails.value}
        onChange={(e) => {
          setMemberDetails({ ...memberDetails, value: e.target.value });
        }}
      />
    </div>
  );
}
