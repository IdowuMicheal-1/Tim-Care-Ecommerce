import { createContext,useEffect,useState } from "react";

export const CartModal = createContext()

export const ModalProvider = ({children}) => {
    const [cartModal,setCartModal] = useState(false);

    return(
        <CartModal.Provider value={{cartModal,setCartModal}}>
            {children}
        </CartModal.Provider>
    )
}