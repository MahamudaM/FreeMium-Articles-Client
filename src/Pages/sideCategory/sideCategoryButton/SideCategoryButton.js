import React from 'react';

const SideCategoryButton = ({data}) => {
    const {CategoryName, _id}= data;
    return (
        <div className='text-center'>
            <button className="btn bg-base-100 text-gray-900 border-[#ddd] border-1 hover:border-[#ddd] hover:border-1 text-[13px] hover:bg-base-100">{CategoryName}</button>
        </div>
    );
};

export default SideCategoryButton;