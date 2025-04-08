"use client";

interface IMenuItem {
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<IMenuItem> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 font-semibold transition-opacity"
    >
      {label}
    </div>
  );
};

export default MenuItem;
