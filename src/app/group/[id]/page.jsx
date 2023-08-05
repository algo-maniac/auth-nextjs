"use client";

import MemberIcon from "./MemberIcon";
import AddMember from "./AddMember";
import AddTransactionItem from "./AddTransactionItem";
import TransactionIcon from "./TransactionIcon";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function page({ params }) {
  const [groupId, setGroupId] = useState();
  const [members, setMembers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const getAllGroupMembers = async () => {
    const response = await axios.post("/api/group/getallgroupmembers", {
      group_id: params.id,
    });
    // console.log(response.data.data);
    setMembers(response.data.data);
    console.log(members);
  };

  const getAllTransactions = async () => {
    const response = await axios.post("/api/group/getalltransactions", {
      group_id: params.id,
    });
    console.log(response.data.data);
    setTransactions(response.data.data);
    console.log(transactions);
  };
  useEffect(() => {
    getAllGroupMembers();
    getAllTransactions();
    console.log(transactions);
  }, []);
  return (
    <div id="full" className="flex h-auto w-full">
      <div id="left-section" className=" w-[75%] h-[100%] flex-col">
        <div
          id="heading"
          className="uppercase text-[20px] text-center p-4 font-serif"
        >
          Members Info
        </div>
        <div
          id="members"
          className="flex h-[50%] flex-wrap justify-center border-b-2"
        >
          {members.map((value, index) => {
            // console.log(value);
            return (
              <MemberIcon
                key={index}
                name={value.name}
                email={value.email}
                upi_id={value.upi_id}
              />
            );
          })}
        </div>
        {/* <hr className="bold" /> */}
        <div
          id="heading"
          className="uppercase text-[20px] text-center p-4 font-serif"
        >
          Transaction Info
        </div>
        <div id="items" className="flex h-[50%] flex-wrap justify-center">
          {transactions.map((value, index) => {
            return (
              <TransactionIcon
                key={index}
                transaction_name={value.transaction_name}
                user1_email={value.user1_transactions.email}
                user1_val={value.user1_transactions.value}
                user2_email={value.user2_transactions.email}
                user2_val={value.user2_transactions.value}
                user3_email={value.user3_transactions.email}
                user3_val={value.user3_transactions.value}
              />
            );
          })}
        </div>
      </div>
      <div id="right-section" className="w-[25%] h-[100%] border-l-2 ">
        <div id="add-member">
          <AddMember id={params.id} />
        </div>
        <div id="add-transaction-item" className="mt-[60px]">
          <AddTransactionItem id={params.id} />
        </div>
      </div>
    </div>
  );
}
