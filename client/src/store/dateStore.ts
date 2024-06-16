import { create } from 'zustand';
import dayjs from 'dayjs';

interface DateState {
  date: dayjs.Dayjs;
  setDate: (newDate: dayjs.Dayjs) => void;
}

export const useDateStore = create<DateState>()(set => ({
  date: dayjs(),
  setDate: newDate => set({ date: dayjs(newDate) }),
}));
