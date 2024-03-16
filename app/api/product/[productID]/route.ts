import axios from 'axios';


export const fetchProductID = async (id:string) => {
  try {
    const  response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in components
  }
};