"use client";

import React, { useState, useEffect } from "react";
export default function EachMember({
  memberId,
  transactionDetails,
  setTransactionDetails,
}) {
  return (
    <div id="member" className="h-[33%] p-4 text-lg font-serif ml-2 ">
      Member {memberId + 1}
      <div id="email" className="mt-4">
        Email
      </div>
      <input
        type="email"
        className="p-[4px] text-black rounded-lg  w-[90%]"
        value={transactionDetails.user_transactions[memberId].email}
        onChange={(e) => {
          let array = transactionDetails.user_transactions;
          array[memberId].email = e.target.value;
          setTransactionDetails({
            ...transactionDetails,
            user_transactions: array,
          });
        }}
      />
      <div id="value" className="mt-4">
        Value
      </div>
      <input
        type="number"
        className="p-[4px] text-black rounded-lg  w-[90%]"
        value={transactionDetails.user_transactions[memberId].value}
        onChange={(e) => {
          let array = transactionDetails.user_transactions;
          array[memberId].value = e.target.value;
          setTransactionDetails({
            ...transactionDetails,
            user_transactions: array,
          });
        }}
      />
    </div>
  );
}
