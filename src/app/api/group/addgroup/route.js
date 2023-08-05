import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Group from "@/models/groupModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { name, description } = reqBody;
    const group = await Group.findOne({ name });

    if (group) {
      return NextResponse.json(
        { error: "Group already exists" },
        { status: 400 }
      );
    }
    const newGroup = new Group({
      groupname: name,
      groupdescription: description,
    });
    console.log(newGroup);

    const savedGroup = await newGroup.save();
    console.log(savedGroup);
    return NextResponse.json({
      message: "Group created successfully",
      success: true,
      savedGroup,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
