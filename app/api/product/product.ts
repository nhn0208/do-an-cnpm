import { ProductProps } from '@/lib/interface';
import * as httpRequest from '@/lib/requests'

export const fetchProductData = async (id_brand:number,page:number) => {
  
  try {
    let path = 'item'
    if (id_brand || page ) {
      path += '?'
    }  
    if (id_brand ) {
      path += `id_brand=${id_brand}`
    }
    if (page ) {
      path += `&page=${page}`
    }
    
    // if (id_type) {
    //   path += `&id_type=${id_type}`
    // }
    // if (id_material) {
    //   path += `&id_material=${id_material}`
    // }
    // if (id_origin) {
    //   path += `&id_origin=${id_origin}`
    // }
    //console.log(path);
    
    const  response = await httpRequest.get(path);
    return response.data;
  } catch (error) {
    console.log('Error fetching user data:', error);
  }
};