import React,{createContext,useContext} from 'react';

export const productsContext = createContext("Default Value");
export const useProducts=()=>{
  return useContext(productsContext);
}
const INIT_STATE = {
  products: [],
  productDetails: {},
  favs: JSON.parse(localStorage.getItem("favs")),
  favsLength:getCountProductsInFavs(),
  // cartLength: getCountProductsInCart(),
  cart: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload
      };
    // вызываем product details 1) копируем state. вызываем  функцию productDetails и задаем значение action.payload
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "FAV_LENGTH":
      return{...state,fav:action.payload};
    case "GET_FAVS":
      return { ...state, favs: action.payload };
    case "CHANGE_FAVS_LENGTH":
      return{...state, favsLength:action.payload};
      case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
     
  }
};

const ProductContextProvider = () => {
    
    return (
        <div>
            
        </div>
    );
};

export default ProductContextProvider;