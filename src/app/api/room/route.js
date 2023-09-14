import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  readDB();

  return NextResponse.json({
    ok: true,
    rooms: DB.rooms,
    totalRooms: rooms.length,
  });
};

export const POST = async (request) => {
  const payload = checkToken();

  let role = null;

  if (role === DB.roomName) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  }

  readDB();

  if (role != DB.roomName) {
    return NextResponse.json(
      {
        ok: false,
        message: `Room ${DB.roomName} already exists`,
      },
      { status: 400 }
    );
  }

  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    roomId: DB.roomId,
    message: `Room ${DB.rooms} has been created`,
  });
};
