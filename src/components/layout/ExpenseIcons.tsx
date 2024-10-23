'use client';

import React from 'react';
import Clothing from './Clothing';
import Travel from './Travel';
import Meals from './Meals';
import Gas from './Gas';
import Supplies from './Supplies';
import Transportation from './Transportation';

import Insurance from './Insurance';

export default function ExpenseIcons() {
  return (
    <div className="grid grid-cols-4 gap-2 pt-[32px] w-full max-h-[150px]">
      <Clothing />
      <Travel />
      <Gas />
      <Meals />
      <Supplies />
      <Transportation />
      <Insurance />
      <div className="flex gap-2 justify-center items-center px-4 py-2.5 font-bold text-white bg-indigo-500 rounded-2xl">
        <div className="self-stretch my-auto w-7 text-4xl">+</div>
        <div className="self-stretch my-auto text-sm">More </div>
      </div>
    </div>
  );
}
