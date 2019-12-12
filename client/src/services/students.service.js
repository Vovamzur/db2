import callWebApi from './../helpers/webApi.helper';

export const getClasses = async () => {
  const response = await callWebApi({
    endpoint: '/api/students/classes',
    type: 'GET'
  });
  return response.json();
}