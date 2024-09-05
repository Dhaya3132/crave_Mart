import { assets } from "../../assets/frontend_assets/assets"

const FoodItem = ({ item }) => {
    return (
        <div id="food-Item" className="rounded-xl w-full">
            <div id="food_Item_Image_Container" className="w-fit">
                <img src={item.image} alt="food_Image" className="rounded-xl" />
            </div>
            <div id="foodInfo" className="py-5">
                <div id="foodRating" className="flex justify-between mb-2">
                    <p className="font-medium text-base">{item.name}</p>
                    <img src={assets.rating_starts} alt="ratings" className="w-16 h-4" />
                </div>
                <p id="foodDescription" className="font-light text-sm mb-2">{item.description}</p>
                <div className="flex gap-2 mt-1">
                    <button className="px-6 py-2 bg-orange-500 border-2 border-black text-white flex-1 rounded-full">Add</button>
                    <p id="foodPrice" className="font-semibold text-lg px-4 py-2 bg-orange-100 rounded-full">${item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;