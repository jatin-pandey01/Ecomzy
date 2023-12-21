import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {

    const url = 'https://fakestoreapi.com/products';

    const [loading,setLoading] = useState(false);
    
    const [data,setData] = useState([]);
    
    async function fetchData(){
        setLoading(true);
        try{
            const {data} = await axios(url);
            setData(data);
        }
        catch(e){
            alert('Unable to fetch data, please try again try later');
            setData([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div className='flex justify-center'>
        <div className='flex mt-10 max-w-7xl justify-center  flex-wrap'>
            {
                loading ? (<Spinner/>):(data.length > 0 ? (
                    data.map((card)=>{
                        return <Product data={card} key={card.id}/>
                        })
                ) : (<div className='text-3xl font-bold my-5'>No Data Found !!</div>))
            }
        </div>
    </div>
  )
}

export default Home;