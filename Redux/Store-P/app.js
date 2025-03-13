
const store = {
    state : {
        cart : [] , shop : []
    },
    
    getState(){
        return this.state
    },

    dispatch(action){
        if(action.type == 'Add to cart'){

            this.state.cart.push(action.payload)
        }
        else if (action.type == 'Remove from cart'){
            this.state.cart.pop()
        }
    }
    
}

function addToCart(product){
    return {type:'Add to cart' , payload: product}
}
function removeFromCart(product){
    return { type :'Remove from cart' ,payload : product}
}




// store.dispatch('apple')
// store.dispatch('orange')
store.dispatch(addToCart('tomato'))
store.dispatch(addToCart('potato'))
store.dispatch(addToCart('apple'))
store.dispatch(removeFromCart('apple'))
// console.log(store.state)
console.log(store.getState())