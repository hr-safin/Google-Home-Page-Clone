import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <footer className='absolute container bottom-0 w-full bg-gray-100 py-4 mt-20'>
                {/* Footer Content */}
                <div className='flex justify-start items-center lg:px-10 px-4'>
                    <h2 className='lg:text-lg text-sm '>Bangladesh</h2>
                </div>
                <div className='border-b border-gray-300 my-4'></div>
                <div className='flex flex-col lg:gap-0 gap-8 lg:flex-row items-center lg:justify-between lg:px-10 px-4'>
                    {/* Footer Links - Section 1 */}
                    <ul className='lg:text-base text-sm flex justify-center gap-5 items-center'>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            About
                        </li>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            Advertising
                        </li>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            Business
                        </li>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            How Search Works
                        </li>
                    </ul>
                    {/* Footer Links - Section 2 */}
                    <ul className='lg:text-base text-sm flex justify-center gap-5 items-center'>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            Privacy
                        </li>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            Terms
                        </li>
                        <li className='hover:underline cursor-pointer hover:underline-offset-1'>
                            Settings
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
