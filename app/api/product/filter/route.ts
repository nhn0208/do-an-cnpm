import * as httpRequest from '@/lib/requests'

export const fetchBrand = async () => {
    try {
      const path = 'item/filter/brand'
      const  response = await httpRequest.get(path);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Rethrow the error for handling in components
    }
  };
  
  export const fetchType = async () => {
    try {
      const path = 'item/filter/type'
      const  response = await httpRequest.get(path);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Rethrow the error for handling in components
    }
  };