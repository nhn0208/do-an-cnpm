import * as httpRequest from '@/lib/requests'

export const getAllType = async () => {
  try {
    const path = 'type'
    const  response = await httpRequest.get(path);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in components
  }
};

export const getTypeById = async (id_type:number) => {
  try {
    const path = `type/${id_type}`
    const response = await httpRequest.get(path);
    return response.data;
  }catch (error) {
    throw error;
  }
}