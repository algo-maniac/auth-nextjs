import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Member from "@/models/memberModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { groupId, name, email, upi_id } = reqBody;

    const user = await Member.findOne({ group_id: groupId, name });
    console.log(user);
    if (user) {
      return NextResponse.json(
        { error: "user already exists in group" },
        { status: 400 }
      );
    }

    const new_member = new Member({
      group_id: groupId,
      name,
      email,
      upi_id,
    });

    console.log(new_member);
    const savedMember = await new_member.save();
    console.log(savedMember);
    return NextResponse.json({
      message: "Group member added successfully",
      success: true,
      data: savedMember,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
