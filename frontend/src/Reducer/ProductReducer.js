export const ProductReducer = (state, action) => {
  switch (action.type) {

    case 'RETRIEVE':
      return action.data;

    case 'ADD':
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
        action.productId === el.product_id
          ? {
            ...el,
            qty: +action.qty

          }
          : el
      );


    case 'DELETE':
      return state.filter(el => action.productId !== el.product_id);

    default:
      return [...state];
  }
};
