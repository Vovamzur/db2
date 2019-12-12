import * as classRepository from './../../db/repositories/class.repository';

export const getClasses = async () => classRepository.getAll();
