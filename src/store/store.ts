import { create } from "zustand";
import { Data } from "../types";

type Store = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isError: string;
  setIsError: (value: string) => void;
  data: Data[];
  setData: (value: Data[]) => void;
};

export const useStore = create<Store>()((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
  isError: "",
  setIsError: (value: string) => set(() => ({ isError: value })),
  data: [],
  setData: (value: Data[]) => set(() => ({ data: value })),
}));
