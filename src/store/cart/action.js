export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addToCart = () => {
  return(dispatch) => {
    console.log('Prodcut added!')
    dispatch ({
      type: ADD_PRODUCT_TO_CART
    })
  }
}