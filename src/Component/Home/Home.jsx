import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import SearchResult from '../SearchResult/SearchResult';
const Home = () => {
    const [inputValue, setInput] = useState("")
    const [searchResult, setSearch] = useState([])

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const result = data.filter((item) => {
                return  (
                  value &&
                  item && 
                  item.name && 
                  item.name.toLowerCase().includes(value)
                )
                  
            })

            // console.log(result)
            setSearch(result)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div  className=' flex justify-center w-full items-center pt-28'>
            <div className=' flex flex-col   '>
                <img 
                  className=' mb-10 mx-auto w-64' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
                <div 
                  className=' w-[400px] lg:w-[500px] flex mx-auto relative rounded-full  bg-gray-100'>
                <input 
                   value={inputValue} 
                    className='w-full relative py-2  border border-gray-300 px-12 focus:border focus:outline-none rounded-full'      type="text" 
                     onChange={(e) => handleChange(e.target.value)}
                     name="" 
                     id="" 
                     placeholder='Search Google or type a URL' />
                    <IoMdSearch 
                      className=' text-gray-500 text-lg absolute mt-3.5 ml-5 ' />
                    <div className='absolute right-0 mr-6 mt-2.5 flex items-center gap-3'>
                    <img 
                      className='  w-5' src="https://i.postimg.cc/52z2jpT2/google-voice.png" alt="" />
                    <img 
                      className=' w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/2048px-Google_Lens_Icon.svg.png" alt="" />
                    </div> 
                </div>
                <div className=' px-5 '>
                    <SearchResult searchResult={searchResult} />
                </div>
            </div>
        </div>
    );
};

export default Home;