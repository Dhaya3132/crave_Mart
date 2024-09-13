import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [token, setToken] = useState();
    const [food_list, setFoodList] = useState([])

    const fetchFood = async () => {
        const response = await axios.get("http://localhost:5000/api/food/list");
        setFoodList(response.data.data);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFood()
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem("token"))
            }
        }
        loadData()
    }, [])

    const contextValue = {
        food_list,
        token,
        setToken,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;