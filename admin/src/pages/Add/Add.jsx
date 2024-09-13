import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const Url = 'http://localhost:5000';
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', data.price);
    formData.append('image', image);

    const response = await axios.post(`${Url}/api/food/add`, formData);
    if (response.data.success) {
      console.log("added successfully")
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message);
    }
  }

  return (
    <div id="add-form" className='p-10'>
      <form id="forms" className='w-96' onSubmit={handleOnSubmit}>

        <div id="image-upload-container" className='flex flex-col justify-center items-center'>
          <p className='font-normal text-base'>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload_image" className='w-26 h-26' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} className='w-16 h-16' type="file" id="image" hidden required />
        </div>

        <div id='product-name' className='mt-5 w-full mb-2 flex flex-col gap-1'>
          <p className='font-normal text-base'>Product name</p>
          <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Type here' className='p-2 border-2 border-neutral-200 outline-none w-full rounded-sm' />
        </div>

        <div id='product-description' className='w-full mb-2 flex flex-col gap-1'>
          <p className='font-normal text-base'>Product description</p>
          <textarea name="description" value={data.description} onChange={handleChange} rows='6' placeholder='Write content here' id="description" className='w-full border-2 border-neutral-200 rounded-sm p-1' required></textarea>
        </div>

        <div id="category-price" className='flex gap-5 w-full'>
          <div id='add-category' className='w-full flex flex-col gap-1'>
            <p className='font-normal text-base'>Product category</p>
            <select onChange={handleChange} name="category" id="category" className='w-full p-2 border-2 border-neutral-200 rounded-sm'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div id='product-price' className='w-full flex flex-col gap-1'>
            <p className='font-normal text-base'>Product price</p>
            <input onChange={handleChange} value={data.price} type="number" placeholder='$10' name='price' className='w-full p-2 border-2 border-neutral-200 rounded-sm' />
          </div>
        </div>
        <button className='px-3 py-1 bg-black text-white mt-4' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Add;