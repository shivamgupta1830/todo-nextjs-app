import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "Get Method Got Hit" });
}
