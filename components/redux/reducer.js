import { ADD_TO_CART, REMOVE_FROM_CART,INCREMENT_QUANTITY,DECREMENT_QUANTITY} from "./action";
//import App from "../../App";
const initialState={
    cartItems:[],
    cartCount:0,
};

 const reducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cartItems:[...state.cartItems, {...action.payload,quantity:1}],
            };
            case REMOVE_FROM_CART:
                let result=state.cartItems.filter((item)=>
                    item.name!==action.payload.name);
                
                return {
                ...state,
                cartItems:result,
            };
            case INCREMENT_QUANTITY:
                return {
                  ...state,
                  cartCount: state.cartCount + action.payload.quantity,
                };
              case DECREMENT_QUANTITY:
                return {
                  ...state,
                  cartCount: state.cartCount - action.payload.quantity,
                };
            default:
                return state;
    }

};
export default reducer;