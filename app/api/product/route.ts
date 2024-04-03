import axios from 'axios';
import { ProductProps } from '@/lib/interface';
import * as httpRequest from '@/lib/requests'

export const fetchProductData = async ({brand,type}: ProductProps) => {
  
  try {
    let path = 'item'
    if (!!brand && brand != "All" || !!type) {
      path += '?'
    }  
    if (brand != '' && brand != 'All') {
      path += `brand=${brand}`
    }
    if (!!type) {
      path += `&type=${type}`
    }
    //console.log(url);
    
    const  response = await httpRequest.get(path);
    return response.data;
  } catch (error) {
    console.log('Error fetching user data:', error);
  }
};

export const fetchProductID =  async (id:number) => {
  try {
    const path = `item/detail/${id}`
    const response = await httpRequest.get(path);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};