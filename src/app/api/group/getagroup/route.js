import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Group from "@/models/groupModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const name = reqBody.name;
    const group = await Group.findOne({ name });
    if (!group) {
      return NextResponse.json(
        {
          error: "group does not exist",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      data: group._id,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
