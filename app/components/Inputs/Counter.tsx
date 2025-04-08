"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Counter {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<Counter> = ({ title, subtitle, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="font-light text-gray-600">{subtitle}</span>
      </div>

      <div className="flex items-center gap-4">
        <div
          onClick={onReduce}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlineMinus />
        </div>

        <span className="font-light text-xl text-neutral-600">{value}</span>

        <div
          onClick={onAdd}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
