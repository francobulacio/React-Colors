import React, {useContext, createContext, useState, Children} from 'react'
import { colorCards } from '../dataColors'

const GlobalContext = createContext()

const GlobalContextProvider = ({children}) =>{
    const [corazones, setCorazones] = useState([])
    const handleAddProduct = (id) =>{
        const productFound = colorCards.find (colorCards => Number (colorCards.id ) === Number (id))
        setCorazones ([...corazones, {productFound, quantity: 1}])
    }

    return(
        <GlobalContext.Provider value={{handleAddProduct}}>
            {children}
        </GlobalContext.Provider>
    )
}

 export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider
