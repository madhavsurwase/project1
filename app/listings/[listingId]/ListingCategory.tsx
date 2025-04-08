"use client";

import { IconType } from "react-icons";

interface ListingCategory {
  icon: IconType;
  label: string;
  description: string;
}

const ListingCategory: React.FC<ListingCategory> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon
          size={40}
          className="text-neutral-600"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{label}</span>
          <span className="text-neutral-500 font-light">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
