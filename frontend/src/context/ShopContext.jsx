import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext()

export const ShopContextProvider = (props) => {
    const currency ='$';
    const delivery_fee = 10

    const value = {
        products, currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider


// The code is used to create a global store that shares products, currency, and delivery fee data across all components in the application. It uses React's Context API to create a context and a provider component that wraps the entire application, allowing any component to access the shared data without prop drilling. The products data is imported from an external file, and the currency and delivery fee are defined as constants within the provider.