import { Input } from "@/app/_core/components/ui/input";
import { ContractFormFields } from "@/app/_core/models/models";
import { Label } from "@radix-ui/react-label";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type PhoneInputProps = {
    id: keyof ContractFormFields;
    label: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
};

export function InputPhoneField({ label, register, error }: PhoneInputProps) {
  const handlePhoneMask = (value: string) => {
    const raw = value.replace(/\D/g, "");

    return raw
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/^(\d{2})\s(\d{5})(\d)/, "($1) $2-$3")
      .slice(0, 15); 
  };

  return (
    <div className="space-y-1">
      <Label>{label}</Label>
        <Input   {...register}
        onChange={(e) => {
          const masked = handlePhoneMask(e.target.value);
          e.target.value = masked;
          register.onChange(e); 
        }}
        inputMode="numeric"
        className="input-class"/>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
