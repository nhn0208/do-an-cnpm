import * as httpRequest from '@/lib/requests'

export const getAllInvoice = async () => {
    try {
      const path = `invoice`
      const response = await httpRequest.get(path);
      return response.data;
    }catch (error) {
      throw error;
    }
  }