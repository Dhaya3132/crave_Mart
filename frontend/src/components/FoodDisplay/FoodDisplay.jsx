import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext)  
  return (
    <div id="foodDisplay" className="mt-2">
        <h2 className="font-semibold text-2xl mb-3">Our top dishes</h2>
        <div id="foodList" className="grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 mt-5">
            {
                food_list.map((item) => {
                  if(category === 'All' || category == item.category){
                    return (  <FoodItem key={item._id} item={item} />)
                }})
            }
        </div>
    </div>
  )
}

export default FoodDisplay;