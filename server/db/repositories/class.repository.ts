import { getManager } from 'typeorm';
import { Class } from './../models/Class';

export const getAll = () => {
  const classRepository = getManager().getRepository(Class);
  return classRepository.find();
}