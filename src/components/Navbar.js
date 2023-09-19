import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from './../assets/logo.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const Cart = useSelector((state)=> state.Cart);

  return (
    <div className='bg-[rgb(15,23,42)] py-3'> 
        <div className='flex px-3 mx-auto justify-between max-w-6xl '>
            <NavLink to={'/'}><img src={logo} className='h-14'/></NavLink>
            <div className='flex items-center font-medium mr-2 sm:mr-5 relative gap-x-5'>
                <NavLink to={'/'} className='text-lg transition-all duration-300 text-white hover:text-[rgb(119,234,142)]'>Home</NavLink>
                <NavLink to={'/cart'} className='text-2xl transition-all text-white hover:text-[rgb(119,234,142)]'><FaShoppingCart/></NavLink>
                {
                  Cart.length>0 ? (<NavLink to='/cart' className='text-white px-2 text-sm rounded-full absolute top-3 animate-bounce bg-green-600 right-[-10px] font-medium'>
                    <p>{Cart.length}</p>
                  </NavLink>) : <></>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar;