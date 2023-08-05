"use client";

// import MemberIcon from "./MemberIcon";
// import AddMember from "./AddMember";
// import AddTransactionItem from "./AddTransactionItem";

export default function page() {
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
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
        </div>
        {/* <hr className="bold" /> */}
        <div
          id="heading"
          className="uppercase text-[20px] text-center p-4 font-serif"
        >
          Transaction Info
        </div>
        <div id="items" className="flex h-[50%] flex-wrap justify-center">
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
        </div>
      </div>
      <div id="right-section" className="w-[25%] h-[100%] border-l-2 ">
        <div id="add-member">
          <AddMember />
        </div>
        <div id="add-transaction-item" className="mt-[60px]">
          <AddTransactionItem />
        </div>
      </div>
    </div>
  );
}
