import axios from 'axios';

export const fetchProductData = async () => {
  try {
    const url = 'http://localhost:4000/api/v1/item/'
    const  response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in components
  }
};

export const fetchProductID =  async (id:number) => {
  try {
    const url = `http://localhost:4000/api/v1/item/detail/${id}`
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};