"use client";

import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "./GroupIcon";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [modalEnabled, setModalEnabled] = React.useState(false);
  const [groupItem, setGroupItem] = React.useState({
    name: "",
    description: "",
  });
  const [allGroups, setAllGroups] = React.useState([]);

  const addGroup = () => {
    setModalEnabled(true);
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(groupItem);
      const response = await axios.post("/api/group/addgroup", groupItem);
      console.log("Group added successfully", response.data);
      setGroupItem({ name: "", description: "" });
      setModalEnabled(false);
    } catch (error) {
      console.log("Group couldn't be added");
    }
  };

  const getAllGroups = async () => {
    const response = await axios.get("/api/group/getallgroups");
    // console.log(response.data);
    setAllGroups(response.data.data);
    console.log(allGroups);
  };
  useEffect(() => {
    getAllGroups();
  }, [modalEnabled]);

  return (
    <>
      {modalEnabled && (
        <div className="z-20 h-[50vh] w-[40vw] bg-slate-950 border-2 absolute top-[20vh] left-[30vw] font-serif rounded-lg">
          <div id="heading" className="text-[40px] text-center">
            Add Group
          </div>
          <form
            onSubmit={submitHandler}
            className="h-[300px] flex-col justify-center align-center"
          >
            <div id="name" className="h-[33%] p-4 text-lg font-serif ml-2 ">
              Group Name
              <input
                type="text"
                className="p-[4px] text-black rounded-lg w-[90%] ml-2"
                value={groupItem.name}
                onChange={(e) => {
                  setGroupItem({ ...groupItem, name: e.target.value });
                }}
              />
            </div>
            <div
              id="description"
              className="h-[33%] p-4 text-lg font-serif ml-2 "
            >
              Desription
              <input
                type="text"
                className="p-[4px] text-black rounded-lg  w-[90%] ml-2"
                value={groupItem.description}
                onChange={(e) => {
                  setGroupItem({ ...groupItem, description: e.target.value });
                }}
              />
            </div>

            <button
              className="h-12 text-2xl ml-[40%] border-4 rounded-xl w-[100px] cursor-pointer my-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="h-20 w-full relative min-h-screen opacity-50 font-serif">
        <Image src="/images/logo_blue.avif" alt="My Image" fill={true} />
        <button
          className="h-[80px] w-[200px] border-4 z-10 absolute bottom-[80px] left-[80px] rounded-[2rem] text-lg pr-3"
          onClick={addGroup}
        >
          <AddIcon sx={{ color: "white" }} fontSize="large" />
          Add a group
        </button>
        <div className="h-[80px] w-[700px] z-10 absolute top-[200px] left-[50px] rounded-[2rem] text-[50px] font-serif font-bold	md:left-[80px]">
          Now split your bills more conviniently with Splitterz
        </div>
      </div>
      <div id="groups" className="w-full font-serif relative">
        <div
          id="heading"
          className="text-[40px] py-4 uppercase text-center bg-slate-950 sticky top-10"
        >
          Groups
        </div>
        <div
          id="group-section"
          className="h-[300px] w-full flex flex-wrap justify-center"
        >
          {allGroups.map((value, index) => {
            return (
              <GroupIcon
                key={index}
                groupname={value.groupname}
                groupdescription={value.groupdescription}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
