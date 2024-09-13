import { assets } from "../../assets/frontend_assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeCart } from "../../store/cartSlice";
import { useContext } from "react";
import {StoreContext} from '../../context/StoreContext';

const FoodItem = ({ item }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.cartItem);
    const {token} = useContext(StoreContext);

    const handleAddCart = () => {
        console.log('Add to cart clicked');
        console.log('Item ID:', item._id);
        dispatch(addToCart(item._id, token));
    }

    const handleRemoveCart = () => {
        dispatch(removeCart(item._id));
    }

    return (
        <div className="rounded-xl">
            <div>
                <img src={`http://localhost:5000/image/`+item.image} alt={`${item.name} image`} className="rounded-sm w-full" />
            </div>
            <div className="py-3">
                <div className="flex justify-between mb-2">
                    <p className="font-medium text-base">{item.name}</p>
                    <img src={assets.rating_starts} alt="ratings" className="w-16 h-4" />
                </div>
                <p className="font-light text-sm mb-2">{item.description}</p>
                <div className="flex gap-2 mt-1">
                    {cartItem[item._id] ?
                        (<div className="flex items-center flex-1 rounded-full">
                            <button onClick={handleRemoveCart} className="bg-orange-500 px-4 py-1 text-white text-base rounded-sm">-</button>
                            <p className="mx-2">{cartItem[item._id]}</p>
                            <button onClick={handleAddCart} className="bg-orange-500 px-4 py-1 text-white text-base rounded-sm">+</button>
                        </div>) : (<button className="px-6 py-2 bg-orange-500 text-white flex-1 rounded-sm" onClick={handleAddCart}> Add </button>)}
                    <p className="font-medium text-lg px-4 py-2 bg-slate-50 rounded-sm"> ${item.price} </p>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
