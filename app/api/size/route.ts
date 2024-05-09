import * as httpRequest from '@/lib/requests'

export const getSizeById = async (id_size:number) => {
    try {
      const path = `size/${id_size}`
      const response = await httpRequest.get(path);
      return response.data;
    }catch (error) {
      throw error;
    }
  }