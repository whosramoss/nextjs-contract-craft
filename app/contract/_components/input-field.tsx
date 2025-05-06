"use client";

import { UseFormRegister } from "react-hook-form";
import { Input } from "@/app/_core/components/ui/input";
import { ContractFormFields } from "@/app/_core/models/models";
import { Label } from "@radix-ui/react-label";

export function InputField({
  label,
  id,
  register,
  error,
  type = "text",
}: {
  label: string;
  id: keyof ContractFormFields;
  type?: string;
  register: UseFormRegister<ContractFormFields>;
  error?: { message?: string };
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <Input id={id} type={type} {...register(id)} />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
