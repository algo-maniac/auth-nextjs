import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Transaction from "@/models/transactionModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { group_id } = reqBody;
    console.log(reqBody);
    const allTransactions = await Transaction.find({ group_id });
    console.log(allTransactions);
    return NextResponse.json({
      data: allTransactions,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
