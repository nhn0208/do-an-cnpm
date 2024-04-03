//'use server'

import * as httpRequest from '@/lib/requests'
import { useContext } from "react";

export const addProductID = async (id :number) => {
  //const [state, dispatch] = useContext(StoreContext);
  
  //const loginPath = 'auth/login'
  const cartPath = `cart/add/${id}`
  try {
    // const loginResponse = await httpRequest.post(loginPath,{
    //   "email":"phammanhbeo2001@gmail.com",
    //   "password":"123456"
    // })
    // console.log(loginResponse.data);

    const cartResponse = await httpRequest.post(cartPath,
    );
    console.log(cartResponse);
    
    return cartResponse.data
    
  }catch ( error) {
    console.log("Error: ", error);
    
  }
}

export const fetchCart = async () => {
  const path ='cart/'
  try {
    const response = await httpRequest.get(path)
    return response.data
  } catch (error) {
    console.log(error);
    
  }
}

export const increaseProductCart = async (id:number | undefined) => {
  const path =`cart/increase/${id}`
  try {
    const response = await httpRequest.post(path)
    return response
  } catch (error) {
    console.log(error);
    
  }
}

export const decreaseProductCart = async (id:number | undefined) => {
  const path =`cart/decrease/${id}`
  try {
    const response = await httpRequest.post(path)
    return response
  } catch (error) {
    console.log(error);
    
  }
}

export const deleteProductCart = async (id:number | undefined) => {
  const path =`cart/remove/${id}`
  try {
    const response = await httpRequest.del(path)
    return response
  } catch (error) {
    console.log(error);
    
  }
}

