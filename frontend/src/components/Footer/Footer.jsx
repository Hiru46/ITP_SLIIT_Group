import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full mx-auto py-8 px-4 md:py-16 md:px-8 bg-gradient-to-r from-[#161920] to-[#0a0b0d] text-gray-300 relative'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-[url("/path-to-your-pattern.png")] bg-cover bg-opacity-20'></div>

            <div className='relative z-10 grid gap-8 md:grid-cols-3'>
                <div className='flex flex-col items-center text-center'>
                    <div className='relative mb-4'>
                        <img src="Logo3.png" alt="Logo" className='h-[120px] w-auto rounded-lg shadow-lg' />
                        <div className='absolute inset-0 bg-gradient-to-r from-[#006AFF] to-[#00BFFF] opacity-20 rounded-lg' />
                    </div>
                    <p className='py-4 text-base md:text-lg text-gray-400 leading-relaxed'>
                        At AutoCare Center, we are dedicated to keeping your vehicle in top condition. Whether you need routine maintenance or advanced repairs, our expert team is here to provide reliable, high-quality service.
                    </p>
                    <div className='flex flex-wrap justify-center space-x-4 md:space-x-6'>
                        <a href="#" aria-label="Facebook" className='bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-[#006AFF] hover:text-white transition-transform transform hover:scale-110 duration-300 shadow-md'>
                            <FaFacebookSquare size={30} />
                        </a>
                        <a href="#" aria-label="Instagram" className='bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-[#006AFF] hover:text-white transition-transform transform hover:scale-110 duration-300 shadow-md'>
                            <FaInstagram size={30} />
                        </a>
                        <a href="#" aria-label="Twitter" className='bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-[#006AFF] hover:text-white transition-transform transform hover:scale-110 duration-300 shadow-md'>
                            <FaTwitterSquare size={30} />
                        </a>
                        <a href="#" aria-label="Github" className='bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-[#006AFF] hover:text-white transition-transform transform hover:scale-110 duration-300 shadow-md'>
                            <FaGithubSquare size={30} />
                        </a>
                        <a href="#" aria-label="Dribbble" className='bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-[#006AFF] hover:text-white transition-transform transform hover:scale-110 duration-300 shadow-md'>
                            <FaDribbbleSquare size={30} />
                        </a>
                    </div>
                </div>
                <div className='ml-[10%] grid grid-cols-2 gap-8 md:grid-cols-4 md:col-span-2'>
                    <div>
                        <h6 className='font-medium text-[#006AFF] mb-2 text-2xl'>
                            Solutions
                        </h6>
                        <ul className='space-y-4'>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Analytics
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Marketing
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Commerce
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Insights
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#006AFF] mb-2 text-2xl'>
                            Support
                        </h6>
                        <ul className='space-y-4'>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Pricing
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Documentation
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Guides
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                API Status
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#006AFF] mb-2 text-2xl'>
                            Company
                        </h6>
                        <ul className='space-y-4'>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                About
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Blog
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Jobs
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Press
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#006AFF] mb-2 text-2xl'>
                            Legal
                        </h6>
                        <ul className='space-y-4'>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Claim
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Policy
                            </li>
                            <li className='text-sm hover:text-[#006AFF] hover:underline transition-colors duration-300'>
                                Terms
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
