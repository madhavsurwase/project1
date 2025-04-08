"use client";

import Avatar from "@/app/components/Avatar";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/Map"), {ssr: false});

interface ListingInfo {
  user: SafeUser;
  category: { icon: IconType; label: string; description: string } | undefined;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  locationValue: string;
  description: string;
}

const ListingInfo: React.FC<ListingInfo> = ({
  user,
  category,
  guestCount,
  roomCount,
  bathroomCount,
  locationValue,
  description,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <span>Hosted by {user?.name}</span>
          <Avatar src={user?.image} />
        </div>

        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <span>{guestCount} guest(s)</span>
          <span>{roomCount} room(s)</span>
          <span>{bathroomCount} bathroom(s)</span>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <span className="text-lg font-light text-neutral-500">{description}</span>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
