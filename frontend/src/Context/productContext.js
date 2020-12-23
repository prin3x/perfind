import React, { createContext, useEffect, useReducer } from 'react';
import axios from "../config/axios";
import { ProductReducer } from "../Reducer/ProductReducer";
import LocalStorageService from '../services/LocalStorageService';


export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [selectItem, dispatch] = useReducer(ProductReducer, []);

  const retrieveAllItems = async () => {
    let data = {};
    if (LocalStorageService.getToken()) {
      ({ data } = await axios.get('/carts'));
    }
    dispatch({ type: 'RETRIEVE', data: data });
  };

  const addItem = async (id, attr) => {
    dispatch({ type: 'ADD', ...attr });
    await axios.post(`/carts/${id}`, {
      qty: attr.qty || 1,
    });
  };

  const sendUpdatedData = async productId => {
    await axios.post(`/carts/${productId}`, {
      qty: selectItem.find(item => item.product_id === productId)
    });
  };

  const updateQty = async (productId, qty) => {
    await axios.post(`/carts/${productId}`, { qty });
    qty === 0
      ? deleteProduct(productId)
      : await dispatch({ type: 'UPDATE_QTY', productId, qty });
  };


  const deleteProduct = async productId => {
    await axios.delete(`/carts//${productId}`);
    dispatch({ type: 'DELETE', productId });
  };
  // useEffect(() => {
  //   retrieveAllItems();
  // }, []);
  return (
    <ProductContext.Provider value={{
      retrieveAllItems,
      addItem,
      dispatch,
      updateQty,
      deleteProduct,
      sendUpdatedData,
      selectItem
    }}>
      {children}
    </ProductContext.Provider>
  );
}