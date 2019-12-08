export type User = {
  id: number;
  login: string;
  password: string;
  role: string;
}

const users: User[] = [
  {
    id: 1,
    login: 'deanery',
    password: 'deanery',
    role: '/deanery',
  },
  {
    id: 2,
    login: 'student',
    password: 'student',
    role: '/student',
  },
  {
    id: 3,
    login: 'campusWorker',
    password: 'campusWorker',
    role: '/campusWorker',
  }
];

export default users;
