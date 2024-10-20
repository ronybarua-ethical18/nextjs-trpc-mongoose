import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  title: string;
  value: string;
};

type FormInputProps = {
  placeholder?: string;
  options?: Option[];
  role: string;
  setRole: (value: string) => void;
};
export function FormInput({
  placeholder = "Select a Role",
  options = [
    { title: "Auditor", value: "auditor" },
    { title: "Customer", value: "customer" },
  ],
  role,
  setRole,
}: FormInputProps) {
  return (
    <Select value={role} onValueChange={(value) => setRole(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option, i) => (
            <SelectItem key={i} value={option.value}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
