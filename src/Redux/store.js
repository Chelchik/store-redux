import { useEffect, useState } from "react";
import { createStore } from "redux";

const initialState = {
    itemsInBasket: 0,
    card: [],
}

const store = createStore(function(state, action) {
    switch (action.type) {
        case "ADD": {
            return {...state, itemsInBasket: state.itemsInBasket + action.payload};
        }

        case "DELETE": {
            return {...state, itemsInBasket: state.itemsInBasket - action.payload,}
        }
        case "SET_CARD_DATA": 
        return { ...state, card: action.payload };
    }

    return state
}, 
 initialState
)

export const setCardData = (data) => ({
   type: "SET_CARD_DATA",
   payload: data, 
});

export default store