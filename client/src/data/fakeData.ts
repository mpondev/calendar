export interface Task {
  readonly _id: number;
  title: string;
  description?: string;
  start?: string;
  startTime?: string;
  completed?: boolean;
}

export const mockTasks: Task[] = [
  {
    _id: 1,
    title: 'Task 1 with a very long title that should be truncated.',
    description: 'Description 1',
    start: '2024-06-20T12:45',
    completed: false,
  },
  {
    _id: 2,
    title: 'Task 2',
    description: 'Description 2',
    start: '2024-06-22T18:45',
    completed: false,
  },
  {
    _id: 3,
    title: 'Task 3 with no time due',
    description: 'Description 3',
    start: '2024-06-22T00:00',
    startTime: '12:30',
    completed: false,
  },
  {
    _id: 4,
    title: 'Task 4 with no time due',
    description: 'Description 4',
    start: '2024-06-22T00:00',
    completed: false,
  },
  {
    _id: 5,
    title: 'Task 5 with short long title',
    description: 'Description 5',
    start: '2024-06-22T12:45',
    completed: false,
  },
  {
    _id: 6,
    title: 'Task 6',
    description: 'Description 6',
    start: '2024-06-22T10:00',
    completed: false,
  },
  {
    _id: 7,
    title: 'Task 7',
    description: 'Description 7',
    start: '2024-06-22T8:30',
    completed: false,
  },
  {
    _id: 8,
    title: 'Task 8',
    description: 'Description 8',
    start: '2024-06-22T12:45',
    completed: false,
  },
  {
    _id: 9,
    title: 'Task 9',
    description: 'Description 9',
    start: '2024-06-22T12:45',
    completed: false,
  },
];
