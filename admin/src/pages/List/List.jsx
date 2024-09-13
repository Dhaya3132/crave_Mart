import axios from 'axios';
import { useEffect, useState } from 'react';
const List = () => {

  const Url = 'http://localhost:5000';
  const [list, setList] = useState([]);
  const fetchFood = async () => {
    const reponse = await axios.get(`${Url}/api/food/list`);
    if (reponse.data.success) {
      setList(reponse.data.data)
    }
    else {
      toast.error('Error')
    }
  }

  const handleRemove = async(foodId) => {
    const response = await axios.post(`${Url}/api/food/remove`, { id:foodId });
    await fetchFood();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error('Error')
    }
  }

  useEffect(() => {
    fetchFood()
  }, [])
  return (
    <div>
      <h2>List</h2>
      <div>
        {list.map((item) => (
          <div className="rounded-xl">
            <div>
              <img src={`${Url}/image/${item.image}`} className="rounded-sm w-full" />
            </div>
            <div className="py-3">
              <div className="flex justify-between mb-2">
                <p className="font-medium text-base">{item.name}</p>
              </div>
              <p className="font-light text-sm mb-2">{item.description}</p>
              <div className="flex gap-2 mt-1">
                <p className="font-medium text-lg px-4 py-2 bg-slate-50 rounded-sm"> ${item.price} </p>
                <p>{item.category}</p>
                <p className='cursor-pointer' onClick={() => handleRemove(item._id)}>remove</p>
              </div>
            </div>
          </div>))}
      </div>
    </div>
  )
}

export default List