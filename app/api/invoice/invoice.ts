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

export const getAllItemInInvoice = async (id_invoice : number) => {
  try {
    const path = `invoice/detail/${id_invoice}`
    const response = await httpRequest.get(path)
    return response
  }catch(error){
    
  }
}

export const cancelInvoice = async (id_invoice : number) => {
  try {
    const path = `invoice/cancel/${id_invoice}`
    const response = await httpRequest.get(path)
    return response
  }catch(error){
    
  }
}