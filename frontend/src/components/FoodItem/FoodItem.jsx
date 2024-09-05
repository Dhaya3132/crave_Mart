import { assets } from "../../assets/frontend_assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeCart } from "../../store/cartSlice";

const FoodItem = ({ item }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.cartItem);

    const handleAddCart = () => {
        console.log('Add to cart clicked');
        console.log('Item ID:', item._id);
        dispatch(addToCart(item._id));
    }

    const handleRemoveCart = () => {
        dispatch(removeCart(item._id));
    }

    return (
        <div className="rounded-xl w-full">
            <div className="w-fit">
                <img src={item.image} alt={`${item.name} image`} className="rounded-xl" />
            </div>
            <div className="py-5">
                <div className="flex justify-between mb-2">
                    <p className="font-medium text-base">{item.name}</p>
                    <img src={assets.rating_starts} alt="ratings" className="w-16 h-4" />
                </div>
                <p className="font-light text-sm mb-2">{item.description}</p>
                <div className="flex gap-2 mt-1">
                    {cartItem[item._id] ?
                        (<div className="flex items-center flex-1 rounded-full">
                            <button onClick={handleRemoveCart} className="bg-orange-500 px-4 py-1 text-white text-base rounded-full">-</button>
                            <p className="mx-2">{cartItem[item._id]}</p>
                            <button onClick={handleAddCart} className="bg-orange-500 px-4 py-1 text-white text-base rounded-full">+</button>
                        </div>) : (<button className="px-6 py-2 bg-orange-500 text-white flex-1 rounded-full" onClick={handleAddCart}> Add </button>)}
                    <p className="font-medium text-lg px-4 py-2 bg-orange-50 rounded-full"> ${item.price} </p>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
