import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
  try {
    const userDetails = await getDataFromToken(request);
    console.log(userDetails);
    const userId = userDetails.id;
    const user = await User.findOne({ userId });
    console.log(user);
    if (user) {
      return NextResponse.json({ message: "User found", data: user });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
