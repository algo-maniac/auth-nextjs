import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();

    console.log(reqBody);
    const { _id } = reqBody;
    const user = await User.findOne({ _id });
    console.log(user);
    if (user) {
      return NextResponse.json({ message: "User found", data: user });
    }
  } catch (error) {
    return NextResponse.json({ error: "Bad error" }, { status: 400 });
  }
}
