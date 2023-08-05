import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Transaction from "@/models/transactionModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const {
      group_id,
      transaction_name,
      user1_transactions,
      user2_transactions,
      user3_transactions,
    } = reqBody;

    const transaction = await Transaction.findOne({
      group_id,
      transaction_name,
    });
    // console.log(transaction);
    if (transaction) {
      return NextResponse.json(
        { error: "Transaction already exists in group" },
        { status: 400 }
      );
    }
    console.log(user1_transactions);
    const new_transaction = new Transaction({
      group_id,
      transaction_name,
      user1_transactions,
      user2_transactions,
      user3_transactions,
    });

    console.log(new_transaction);
    const savedTransaction = await new_transaction.save();
    // console.log(savedTransaction);

    return NextResponse.json({
      message: "Transaction added successfully",
      success: true,
      data: savedTransaction,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
