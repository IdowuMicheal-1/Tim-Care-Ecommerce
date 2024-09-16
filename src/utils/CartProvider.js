import { createContext, useReducer,useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const DEFAULT_VALUE = {
        items:[],
        totalAmount:0
    }
    
    const getInitialState = () => {
        try {
            const storedCart = window.localStorage.getItem('cart-items')
            return storedCart ? JSON.parse(storedCart) : DEFAULT_VALUE
        } catch (error) {
            console.error('Error reading from localStorage:', error)
            return DEFAULT_VALUE
        }
    }
    

    const reducer = (state,action) => {
        if (action.type === 'ADD') {
            const price = action.items.discount ?  action.items.discount : action.items.price
            const updatedTotalAmount = state.totalAmount + price * action.items.amount
            const existingCartIndex = state.items.findIndex((items) => items.id === action.items.id)
            const existingCartItem = state.items[existingCartIndex]

            let updatedItems;
            if(existingCartItem) {
                const updatedItem = 
                {
                    ...existingCartItem,
                    amount:existingCartItem.amount + action.items.amount 
                }
                
                updatedItems = [...state.items]
                updatedItems[existingCartIndex] = updatedItem
            }
            else{
                updatedItems = [...state.items,action.items]
            }
            return{
                items:updatedItems,
                totalAmount:updatedTotalAmount
            }

        }
        else if (action.type === 'REMOVE') {
            const existingCartIndex = state.items.findIndex((items) =>items.id === action.id )
            const existingCartItem = state.items[existingCartIndex]
            const price = existingCartItem.discount ?  existingCartItem.discount : existingCartItem.price
            const totalAmount = state.totalAmount - existingCartItem.amount * price

            let updatedItems
            updatedItems= state.items.filter((items) => items.id !== action.id )
            return {
                items:updatedItems,
                totalAmount:totalAmount
            }
        }
    }

    const  [state,dispatch] = useReducer(reducer,getInitialState())

    useEffect(() => {
        try {
            window.localStorage.setItem('cart-items', JSON.stringify(state))
        } catch (error) {
            console.error('Error writing to localStorage:', error)
        }
    }, [state])

    

    const addItemToCartHandler = (items) => {
        dispatch({
            items:items,
            type:'ADD'
        })
    }

    const removeItemToCartHandler = (id) => {
        dispatch({
            id:id,
            type:'REMOVE'
        })
    }

    const cartProduct = {
        items:state.items,
        totalAmount:state.totalAmount,
        addItems:addItemToCartHandler,
        removeItem:removeItemToCartHandler,

    }
    return (
            <CartContext.Provider value={cartProduct}>
                {children}
            </CartContext.Provider>
    )
}

