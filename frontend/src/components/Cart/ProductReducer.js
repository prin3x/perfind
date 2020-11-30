export const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'RETRIEVE_ALL_ITEMS':
      return action.data.map(item => ({
        id: item.id,
        name: item.Product.name,
        qty: item.qty,
        price: item.Product.price,
        image: item.Product.image,
        product_id: item.product_id,
      }));

    case 'ADD_ITEM_TO_SHOPPING_CART':
      if (state.find(el => el.product_id === action.product_id)) {
        return state.map(el =>
          action.product_id === el.product_id
            ? {
              ...el,
              qty: el.qty + (action.qty || 1),
            }
            : el
        );
      }

      return [
        {
          id: action.id,
          image: action.image,
          name: action.name,
          price: action.price,
          qty: action.qty || 1,
        },
        ...state,
      ];

    case 'UPDATE_QTY':
      return state.map(el =>
        action.productId == el.product_id
          ? {
            ...el,
            qty: action.qty,
          }
          : el
      );

    case 'DELETE_ITEM_FROM_CART':
      return state.filter(el => action.productId !== el.product_id);

    default:
      return [...state];
  }
};
