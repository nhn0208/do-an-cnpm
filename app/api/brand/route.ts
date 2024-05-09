import * as httpRequest from '@/lib/requests'

export const getAllBrand = async () => {
  try {
    const path = 'brand'
    const  response = await httpRequest.get(path);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in components
  }
};

export const getBrandById = async (id_brand:number) => {
  try {
    const path = `brand/${id_brand}`
    const response = await httpRequest.get(path);
    return response.data;
  }catch (error) {
    throw error;
  }
}