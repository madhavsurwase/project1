"use client";

import Button from "@/app/components/Button";
import Calender from "@/app/components/Inputs/Calender";
import { Range } from "react-date-range";

interface ListingReservation {
  price: number;
  totalPrice: number;
  dateRange: Range;
  onChangeDate: (val: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates?: Date[];
}

const ListingReservation: React.FC<ListingReservation> = ({
  price,
  totalPrice,
  dateRange,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <span className="text-2xl font-semibold">$ {price}</span>
        <span className="font-light text-neutral-600">night</span>
      </div>
      <hr />
      <Calender
        value={dateRange}
        onChange={(val) => onChangeDate(val.selection)}
        disabledDates={disabledDates}
      />
      <hr />
      <div className="p-4"><Button disabled={disabled} label="Reserve" onClick={onSubmit}  /></div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <span>Total</span>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default ListingReservation;
