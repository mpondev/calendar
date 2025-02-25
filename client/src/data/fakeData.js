import dayjs from 'dayjs';

export const mockTasks = [
  {
    _id: 1,
    title: 'Task 1 with a very long title that should be truncated.',
    description: 'Description 1',
    start: dayjs().hour(12).minute(45).format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 2,
    title: 'Task 2',
    description: 'Description 2',
    start: dayjs().hour(18).minute(45).add(2, 'day').format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 3,
    title: 'Task 3 with no time due',
    description: 'Description 3',
    start: dayjs().hour(0).minute(0).add(1, 'day').format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 4,
    title: 'Task 4 with no time due',
    description: 'Description 4',
    start: dayjs()
      .hour(0)
      .minute(0)
      .subtract(1, 'day')
      .format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 5,
    title: 'Task 5 with short long title',
    description: 'Description 5',
    start: dayjs().hour(11).minute(20).add(3, 'day').format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 6,
    title: 'Task 6',
    description: 'Description 6',
    start: dayjs().hour(19).minute(50).add(3, 'day').format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 7,
    title: 'Task 7',
    description: 'Description 7',
    start: dayjs().hour(9).minute(30).format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 8,
    title: 'Task 8',
    description: 'Description 8',
    start: dayjs()
      .hour(7)
      .minute(0)
      .subtract(2, 'day')
      .format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
  {
    _id: 9,
    title: 'Task 9',
    description: 'Description 9',
    start: dayjs().hour(23).minute(20).add(4, 'day').format('YYYY-MM-DDTHH:mm'),
    completed: false,
  },
];
