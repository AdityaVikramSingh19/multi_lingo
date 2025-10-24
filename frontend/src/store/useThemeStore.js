import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("multilingo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("multilingo-theme", theme);
    set({ theme });
  },
}));
