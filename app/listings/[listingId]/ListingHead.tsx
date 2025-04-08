"use client";

import Heading from "@/app/components/Heading";
import HeartButton from "@/app/components/HeartButton";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Image from "next/image";

interface ListingHead {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHead> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const loc = getByValue(locationValue);

  return <>
    <Heading title={title} subtitle={`${loc?.region}, ${loc?.label}`} />
    <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
      <Image src={imageSrc} alt={title} fill className="object-cover w-full" />
      <div className="absolute top-5 right-5">
        <HeartButton listingId={id} currentUser={currentUser} />
      </div>
    </div>
  </>;
};

export default ListingHead;
