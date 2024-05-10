//'use server'

import * as httpRequest from '@/lib/requests'
import { notification } from 'antd';

export const addProductId = async (id_item_detail :number) => {
  //const [state, dispatch] = useContext(StoreContext);
  
  //const loginPath = 'auth/login'
  const cartPath = `cart/add/${id_item_detail}`
  try {
    // const loginResponse = await httpRequest.post(loginPath,{
    //   "email":"phammanhbeo2001@gmail.com",
    //   "password":"123456"
    // })
    // console.log(loginResponse.data);

    const cartResponse = await httpRequest.post(cartPath)
    .then(()=>{
      notification.open({
        message: "Đã thêm vào giỏ hàng",
        description:'',
        placement: 'bottomRight',
        type: 'success',
    })
    })
    // console.log(cartResponse);
    
    // return cartResponse.data
    
    
  }catch ( error) {
  }
}

export const fetchCart = async () => {
  const path ='cart/'
  try {
    const response = await httpRequest.get(path)
    return response.data
  } catch (error) {
  }
}

export const increaseProductCart = async (id:number | undefined) => {
  const path =`cart/increase/${id}`
  try {
    const response = await httpRequest.post(path)
    return response
  } catch (error) {
  }
}

export const decreaseProductCart = async (id:number | undefined) => {
  const path =`cart/decrease/${id}`
  try {
    const response = await httpRequest.post(path)
    return response
  } catch (error) {
  }
}

export const deleteProductCart = async (id:number | undefined) => {
  const path =`cart/remove/${id}`
  try {
    const response = await httpRequest.del(path)
    return response
  } catch (error) {
  }
}

export const checkoutCart = async (body : any) => {
  const path = 'cart/checkout'
  try {
    const response = await httpRequest.post(path,body);
    return response;
  }catch (error){

  }
}
