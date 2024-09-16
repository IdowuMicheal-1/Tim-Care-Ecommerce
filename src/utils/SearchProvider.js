import { createContext, useState } from "react";

export const SearchContext = createContext()

const SearchProvider = ({children}) => {
    const [category, setCategory] = useState("All Product");
    const [search,setSearch] = useState('')
    const [showMobile,setShowMobile] = useState(false)
    return (
        <SearchContext.Provider value={{search,setSearch,category,setCategory,showMobile,setShowMobile}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;