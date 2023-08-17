"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function GroupIcon({ groupname, groupdescription }) {
  const [group, setGroup] = useState({});
  const router = useRouter();
  const goToGroup = async () => {
    // console.log(groupname);
    setGroup({
      ...group,
      groupname: groupname,
      groupdescription: groupdescription,
    });
    // console.log(group);
    const response = await axios.post("/api/group/getagroup", {
      name: groupname,
    });
    console.log(response.data);
    const id = response.data.data;
    router.push(`/group/${id}`);
  };
  return (
    <div
      className="border-2 h-[300px] w-[200px] m-6 rounded-2xl bg-slate-950 cursor-pointer"
      onClick={goToGroup}
    >
      <div id="heading" className=" h-[80px] text-[25px] text-center pt-3">
        Group Name - {groupname}
      </div>

      <div id="description" className="h-[220px] text-[25px] text-center pt-3">
        Group Description - {groupdescription}
      </div>
    </div>
  );
}
