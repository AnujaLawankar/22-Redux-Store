export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
actions.js

export const updateProducts = (products) => {
    return {
        type: UPDATE_PRODUCTS,
        payload: products,
    };
};

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const addMultipleToCart = (products) => {
    return {
        type: ADD_MULTIPLE_TO_CART,
        payload: products,
    };
};

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};

export const updateCartQuantity = (productId, quantity) => {
    return {
        type: UPDATE_CART_QUANTITY,
        payload: { productId, quantity },
    };
};

export const toggleCart = () => {
    return {
        type: TOGGLE_CART,
    };
};

export const updateCategories = (categories) => {
    return {
        type: UPDATE_CATEGORIES,
        payload: categories,
    };
};

export const updateCurrentCategory = (categoryId) => {
    return {
        type: UPDATE_CURRENT_CATEGORY,
        payload: categoryId,
    };
};
