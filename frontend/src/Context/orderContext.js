import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export function OrderContextProvider({ children }) {
  const [totalPriceOrder, setTotalPriceOrder] = useState(0);



  return (
    <OrderContext.Provider value={{
      totalPriceOrder,
      setTotalPriceOrder
    }}>
      {children}
    </OrderContext.Provider>
  );
}
