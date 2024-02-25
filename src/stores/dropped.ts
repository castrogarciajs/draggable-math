import { create } from "zustand";

interface StateDropped {
  isDropped: boolean;
  onIsDropped: (by: boolean) => void;
}

const useDropped = create<StateDropped>((set) => ({
  isDropped: false,
  onIsDropped: (by) => {
    set(() => ({ isDropped: by }));
  },
}));

export default useDropped;
