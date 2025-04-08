import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

interface Params {
  listingId?: string;
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    return NextResponse.error();
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: user.id,
    },
  });

  return NextResponse.json(listing);
}