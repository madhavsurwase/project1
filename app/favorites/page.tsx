import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

import { getCurrentUser } from "../actions/getCurrentUser";
import { getFavorites } from "../actions/getFavorites";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavorites();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites"
          subtitle="You don't have any favorites yet"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )

};


export default FavoritesPage;