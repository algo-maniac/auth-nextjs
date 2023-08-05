import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Group from "@/models/groupModel";

connect();

export async function GET(request) {
  try {
    const allGroups = await Group.find();
    console.log(allGroups);

    return NextResponse.json({
      data: allGroups,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
