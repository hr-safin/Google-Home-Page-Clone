import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import SearchResult from '../SearchResult/SearchResult';

const Home = () => {
    // State for input value and search results
    const [inputValue, setInput] = useState("");
    const [searchResult, setSearch] = useState([]);

    // Fetch data based on the input value
    const fetchData = (value) => {
        fetch("/info.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Filter data based on the input value
            const result = data.filter((item) => {
                if (value) {
                    return (
                        item &&
                        item.title &&
                        item.title.toLowerCase().includes(value)
                    );
                }
            });

            // Update search results state
            setSearch(result);
        });
    };

    // Handle input change
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className='flex justify-center w-full items-center pt-10 md:pt-28'>
            {/* Search Bar Section */}
            <div className='flex flex-col'>
                <img
                    className='mb-6 lg:mb-10 mx-auto w-36 md:w-64'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                    alt=""
                />
                <div className='w-[350px] md:w-[500px] flex mx-auto relative rounded-full bg-gray-100'>
                    {/* Input for search */}
                    <input
                        value={inputValue}
                        className='w-full relative py-2 border border-gray-300 px-12 focus:shadow-md focus:border-none focus:outline-none rounded-full'
                        type="text"
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder='Search Google or type a URL'
                    />
                    {/* Search icon */}
                    <IoMdSearch
                        className='text-gray-500 text-lg absolute mt-3.5 ml-5'
                    />
                    {/* Additional icons */}
                    <div className='absolute right-0 mr-6 mt-2.5 flex items-center gap-3'>
                        <img
                            className='w-5'
                            src="https://i.postimg.cc/52z2jpT2/google-voice.png"
                            alt=""
                        />
                        <img
                            className='w-5'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/2048px-Google_Lens_Icon.svg.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* Search results and buttons */}
                <div className='flex -mt-3 flex-col px-3'>
                    <SearchResult searchResult={searchResult} />
                    <div className='pt-8 flex justify-center items-center gap-4'>
                        {/* Google Search button */}
                        <button className='border border-gray-200 hover:border hover:border-gray-400 bg-gray-200 text-black py-1.5 text-sm px-3 rounded-md'>
                            Google Search
                        </button>
                        {/* I'm feeling Lucky button */}
                        <button className='border border-gray-200 hover:border hover:border-gray-400 bg-gray-200 text-black py-1.5 text-sm px-3 rounded-md'>
                            I'm feeling Lucky
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
