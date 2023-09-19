import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({data}) => {
  const Cart = useSelector((state)=> state.Cart);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(data.id));
    toast.error('Item removed from cart!');
  }
  const addToCart = () =>{
    dispatch(add(data));
    toast.success('Item added to cart!');
  }

  const [color,setColor] = useState(false);
  return ( 
    <div className='max-w-[260px] border-purple-100 border-2 hover:border-none hover:scale-[1.10] hover:shadow-3xl transition-all duration-300 my-auto h-[400px] mb-10 rounded-xl px-5 shadow-xl mx-[10px]' onMouseLeave={()=>setColor(false)} onMouseOver={()=>setColor(true)} >
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-lg font-bold mt-5 mx-auto'>{`${data.title.substring(0,17)}...`}</h1>
        <p className='px-2 text-xs'>{`${data.description.substring(0,55)}...`}</p>
        <img src={data.image} className='w-11/12 mx-auto aspect-square'/>
      </div>
      <div className='flex mt-8 justify-between'>
        <p className='text-green-600 font-semibold text-base'>$<span className='text-lg'>{data.price}</span></p>
        <button className={`rounded-2xl ${color?'bg-[rgb(55,65,81)] text-white':'bg-white border-black border-2 text-black'} font-medium px-3`} >
        {
          Cart.some( (p) => p.id === data.id)  ? <p onClick={removeFromCart}>REMOVE ITEM</p> : 
          (<p onClick={addToCart}>ADD TO CART</p>)
        }
        </button>
      </div>
    </div>
  )
}

export default Product;