import {createContext, useReducer, useState} from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state,action){
    if (action.type === 'ADD_ITEM'){
        // ... update the state to add a mean item
        // state.items.push(action.item) you can not change or mutate the state like this because this is not allowed as push will run before the cartReducer is done executing
      const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
      );

      const updatedItems =[...state.items];

      if (existingCartItemIndex > -1){
          const existingItem = state.items[existingCartItemIndex]
       const updatedItem = {
           ...existingItem,
           quantity: existingItem.quantity + 1
       }
       updatedItem[existingCartItemIndex] = updatedItem;
      }else {
      updatedItems.push({...action.item, quantity: 1});
      }
      return {...state, items: updatedItems};
    }
    if (action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1){
            updatedItems.splice(existingCartItemIndex, 1);   //This medhod splice is used to delete the last index in the arary
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems};
    }

    return state;
}
export  function CartContextProvider({children}){
   const [cart, dispatchCartAction ] = useReducer(cartReducer, {items: []});

   function addItem(item){
       dispatchCartAction({type: 'ADD_ITEM', item: item});
   }

    function removeItem(id){
        dispatchCartAction({type: 'REMOVE_ITEM', id});
    }

    const cartContext = {
        items : cart.items,
        addItem,
        removeItem
    };
   console.log(cartContext);

   return<CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartContext;