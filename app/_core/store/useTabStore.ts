import { create } from "zustand";

interface TabState {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  selectedTab: "overview",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));
