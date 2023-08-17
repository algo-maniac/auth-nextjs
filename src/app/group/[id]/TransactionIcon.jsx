"use client";

import React, { useState, useEffect } from "react";

export default function TransactionIcon(props) {
  const [user_transactions, set_user_transactions] = useState([]);
  useEffect(() => {
    console.log(props);
    console.log(props.user_transactions);
    set_user_transactions(props.user_transactions);
    console.log(user_transactions);
  }, []);
  return (
    <div className="border-2 p-2 w-[22%] m-6 rounded-2xl bg-slate-950 flex-col justify-center">
      <div id="heading" className=" h-[40px] text-[15px] text-center p-3">
        Transaction Name: {props.transaction_name}
      </div>
      {user_transactions.map((value, index) => {
        return (
          <div key={index} className="m-2">
            <div
              id="description1"
              className="h-[30px] text-[15px] text-center p-3 m-4"
            >
              Member {index + 1}: {value.email}
            </div>
            <div id="val1" className="h-[30px] text-[15px] text-center p-3 m-4">
              Paid: {value.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
