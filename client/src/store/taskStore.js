import { create } from 'zustand';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const useTaskStore = create(set => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async token => {
    set({ loading: true, error: null });

    try {
      if (!token) throw new Error('Usuario no autenticado');

      const res = await fetch('http://localhost:3000/api/v1/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error('Error al obtener tareas');

      const data = await res.json();
      const dataLocalTime = data.map(task => ({
        ...task,
        start: dayjs.utc(task.start),
      }));

      set({ tasks: dataLocalTime, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
