import { Input } from "@/app/_core/components/ui/input";
import { ContractFormFields } from "@/app/_core/models/models";
import { Label } from "@radix-ui/react-label";

type CNPJInputProps = {
  label: string;
  id: keyof ContractFormFields;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export function CNPJInput({
  label,
  id,
  value,
  onChange,
  error,
}: CNPJInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    const maskedValue = rawValue
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5")
      .slice(0, 18);

    onChange(maskedValue);
  };

  return (
    <div className="space-y-1">
      <Label>{label}</Label>
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
