
export const initialState={
    basket:[]
}
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price +amount,0)


const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADDTOBASKET':
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
            case'REMOVEITEM':
            const index=state.basket.findIndex(
                (basketIndex)=>basketIndex !==action.id
            );
            let newBasket=[...state.basket]
            if (index>=0){
newBasket.splice(index,1)
            }
            else{(
                `cannot delete (id:${action.id}) as its not in the basket`
            )
            }
            return{
                ...state,
                basket:newBasket
            }
            default:
            return state
    }
}

export default reducer;
