export type User = {
  id: number;
  login: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    login: 'deanery',
    password: 'deanery',
  },
  {
    id: 2,
    login: 'student',
    password: 'student',
  },
  {
    id: 3,
    login: 'campusWorker',
    password: 'campusWorker',
  }
];

export default users;
