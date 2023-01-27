import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SelectCategoryCard from './SelectCategoryCardPage/SelectCategoryCard';
import { AiOutlineTag } from "react-icons/ai";
import { useState } from 'react';
import Lottie, { useLottie } from "lottie-react";
import journalist from "../../Lottie/notFound.json";
const SelectCategory = () => {
    const categoryData = useLoaderData();
    // console.log(categoryData[1]);
    // Lottie functions
    const options = {
        animationData: journalist,
        loop: true
      };
      const { View } = useLottie(options);
    if( categoryData[1].length){
        return(
      <div className='px-10'>
        <div className='mb-10'>
        <div className='flex items-center mt-20'>
          <div className='bg-[#ddd] p-1 text-center flex items-center justify-center rounded-full mr-2'>
          <AiOutlineTag className='text-[#000] cursor-pointer font-bold text-2xl' />
          </div>
            <h1 className='text-4xl text-gray-900 font-semibold text-center'>
                {categoryData[0]?.categoryName ? categoryData[0]?.categoryName : "Not found"}
            </h1>
        </div>
        <div className='mt-5'>
             <button className="py-1 px-6 rounded-2xl font-semibold text-white hover:bg-[#2a8127] bg-[#1A8917]">Follow</button>
             <Link to={'/write-stories'}>
             <button className="py-1 px-6 rounded-2xl btn-primary font-semibold ml-3 border-[1px] hover:border-[#1A8917] border-[#1A8917] bg-slate-50 text-[#1A8917] hover:bg-white">get writing</button>
             </Link>
             {/* <button className="btn  btn-outline rounded-2xl font-semibold text-white bg-[#1A8917]">get writing</button> */}
            </div>
        </div>
        {
            categoryData[1].map(data=>
               <SelectCategoryCard data={data} key={data?._id} />
            )
        }
      </div>
)
    }else{
        return (
            <div className='my-28 flex justify-center'>
               <div>
                   <h1 className='text-4xl font-semibold text-gray-900  text-center'>( {categoryData[0]?.categoryName} ) Article not available</h1>
                   <div className='mt-4'>
                    {
                      View
                    }
                   </div>
               </div>
            </div>
        );
    }
   
};

export default SelectCategory;