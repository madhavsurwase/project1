import { SafeUser } from './../types/index';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useLoginModal from './useLoginModal';

interface useFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({
  listingId,
  currentUser
}: useFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      loginModal.onOpen();
      return;
    }

    try {
      let req;
      if (hasFavorited) {
        req = () => axios.delete(`/api/favorites/${listingId}`).then((res) => toast.success("Listing removed from favorites"));
      } else {
        req = () => axios.post(`/api/favorites/${listingId}`).then((res) => toast.success("Listing added to favorites"));
      }
      await req();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [currentUser, listingId, loginModal, hasFavorited, router]);

  return {
    hasFavorited,
    toggleFavorite
  }
};

export default useFavorite;