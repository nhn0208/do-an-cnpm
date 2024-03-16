import axios from 'axios';

export const fetchProductData = async () => {
  try {
    const  response = await axios.get('http://localhost:4000/api/v1/item/');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in components
  }
};

export const fetchProductID = async (id:string) => {
  try {
    const  response = await axios.get(`http://localhost:4000/api/v1/item/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in components
  }
};