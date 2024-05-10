import * as httpRequest from '@/lib/requests'

export const getMaterialById = async (id_material:number) => {
    try {
      const path = `material/${id_material}`
      const response = await httpRequest.get(path);
      return response.data;
    }catch (error) {
      throw error;
    }
  }