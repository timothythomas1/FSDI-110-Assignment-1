import { createContext } from "react"

// contect describes the data structure
// but doesnt not provide implementsation

const StoreContext = createContext({
    cart: [],
    user: {},

    addCart: () => { },
    removeFromCart: () => { },

});

export default StoreContext;