'use client';
import React from 'react';

export default function DashboardItem2() {
  return (
    <div className="flex flex-col px-6 py-6 bg-white rounded-2xl border border-gray-100 border-solid max-w-[340px] max-h-[172px] mx-2">
      <div className="flex flex-col w-full">
        <div className="text-xl font-semibold leading-none text-stone-950">
          Business Expense
        </div>
        <div className="mt-1 text-xs font-bold text-emerald-500">
          +2% <span className="font-medium text-zinc-500">in August</span>
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center mt-6 w-full">
        <div className="self-stretch my-auto text-3xl font-bold text-stone-950">
          $30,000
        </div>
        <div className="flex gap-0.5 items-end self-stretch my-auto">
          <div className="flex shrink-0 h-3.5 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm w-[7px]" />
          <div className="flex shrink-0 h-7 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm w-[7px]" />
          <div className="flex shrink-0 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm h-[23px] w-[7px]" />
          <div className="flex shrink-0 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm h-[15px] w-[7px]" />
          <div className="flex shrink-0 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm h-[19px] w-[7px]" />
          <div className="flex shrink-0 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm h-[31px] w-[7px]" />
          <div className="flex shrink-0 bg-[var(--System-Danger-300,#F99BAB)] rounded-sm h-[22px] w-[7px]" />
        </div>
      </div>
    </div>
  );
}
