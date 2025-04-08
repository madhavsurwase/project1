import prisma from "@/app/libs/prismadb";

import { getCurrentUser } from "./getCurrentUser";

export async function getFavorites() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [ ...(user.favoriteIds || []) ],
        }
      }
    });

    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
