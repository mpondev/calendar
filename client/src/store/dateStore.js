import { create } from 'zustand';
import dayjs from 'dayjs';

export const useDateStore = create(set => ({
  date: dayjs(),
  setDate: newDate => set({ date: dayjs(newDate) }),
}));
