import * as httpRequest from '@/lib/requests'

export const fetchProductID =  async (id:number) => {
    try {
      const path = `item/detail/${id}`
      const response = await httpRequest.get(path);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };