'use client';

import { IconType } from "react-icons";

interface CategoryInput {
icon: IconType;
label: string;
selected?: boolean;
onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInput> = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <div
      className={`flex flex-col gap-3 transition cursor-pointer hover:border-black p-4 rounded-xl border-2  ${
        selected ? "border-black" : "border-neutral-200"
      }`}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <span className="font-semibold">{label}</span>
    </div>
  );
};

export default CategoryInput;