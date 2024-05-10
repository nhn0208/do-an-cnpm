import * as httpRequest from '@/lib/requests'

export const getOriginById = async (id_origin:number) => {
    try {
      const path = `origin/${id_origin}`
      const response = await httpRequest.get(path);
      return response.data;
    }catch (error) {
      throw error;
    }
  }