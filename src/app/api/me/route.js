import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Nithipong Howong",
    studentId: "650612087",
  });
};
