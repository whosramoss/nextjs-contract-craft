import { Input } from "@/app/_core/components/ui/input";
import { ContractFormFields } from "@/app/_core/models/models";
import { Label } from "@radix-ui/react-label";

type CPFInputProps = {
  label: string;
  id: keyof ContractFormFields;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export function CPFInput({ id, value, onChange, error }: CPFInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    const maskedValue = rawValue
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
      .slice(0, 14);

    onChange(maskedValue);
  };

  return (
    <div className="space-y-1">
      <Label>CPF</Label>
      <Input
        id={id}
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        className="input-class"
      />

      {error && (
        <p className="text-sm text-red-500">
          {error === "Required" ? "Campo obrigatório" : error}
        </p>
      )}
    </div>
  );
}
