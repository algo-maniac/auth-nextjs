import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Group from "@/models/memberModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { group_id } = reqBody;
    const allGroupMembers = await Group.find({ group_id });

    return NextResponse.json({
      data: allGroupMembers,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
