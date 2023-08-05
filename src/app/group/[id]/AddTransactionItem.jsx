"use client";

import { useState } from "react";
import EachMember from "./EachMember";
import axios from "axios";
// import React, { useState, useEffect } from "react";

export default function AddTransactionItem({ id }) {
  const [memberSize, setMemberSize] = useState(1);
  const [transactionDetails, setTransactionDetails] = useState({
    transaction_name: "",
    group_id: id,
    user1_transactions: { email: "", value: "" },
    user2_transactions: { email: "", value: "" },
    user3_transactions: { email: "", value: "" },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(transactionDetails);
    const response = await axios.post(
      "/api/group/addtransaction",
      transactionDetails
    );
    console.log(response.data);
  };
  const addMember = (e) => {
    e.preventDefault();
    console.log(memberSize);
    setMemberSize(memberSize + 1);
  };
  return (
    <div className="border-2 m-6 rounded-2xl bg-slate-950 flex-col justify-center">
      <div
        id="heading"
        className="uppercase text-[20px] text-center p-4 font-serif"
      >
        Add a Transaction
      </div>
      <form className="flex-col justify-center">
        <div id="name" className="h-[33%] p-4 text-lg font-serif ml-2 ">
          Transaction Name
          <input
            type="text"
            className="p-[4px] text-black rounded-lg w-[90%]"
            value={transactionDetails.transaction_name}
            onChange={(e) => {
              setTransactionDetails({
                ...transactionDetails,
                transaction_name: e.target.value,
              });
            }}
          />
        </div>

        <EachMember
          transactionDetails={transactionDetails}
          setTransactionDetails={setTransactionDetails}
          memberId="1"
        />
        <EachMember
          transactionDetails={transactionDetails}
          setTransactionDetails={setTransactionDetails}
          memberId="2"
        />
        <EachMember
          transactionDetails={transactionDetails}
          setTransactionDetails={setTransactionDetails}
          memberId="3"
        />
        {/* <button
          className="h-12 text-2xl ml-[10%] border-4 rounded-xl w-[80%] cursor-pointer relative my-4"
          onClick={addMember}
        >
          Add Member
        </button> */}
        <button
          className="h-12 text-2xl ml-[30%] border-4 rounded-xl w-[100px] cursor-pointer relative my-4"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
