import { ContractInfo } from "@/app/_core/models/models";
import { create } from "zustand";

type CreateContractStore = {
  contract: ContractInfo | null;
  setContract: (contract: ContractInfo | null) => void;
};

export const useCreateContractStore = create<CreateContractStore>((set) => ({
  contract: null,
  setContract: (e) => set({ contract: e }),
}));
