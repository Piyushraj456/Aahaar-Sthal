"use client";

import React from 'react';

const Skeleton: React.FC = () => {
    return (
        <div className='flex flex-wrap justify-center'>
            {/* Skeleton Card Container */}
            <div className='shadow-md rounded-md p-4 max-w-full w-full mx-2 my-4 flex flex-col'> {/* Change max-w-sm to max-w-full */}
                <div className='animate-pulse flex flex-col space-y-4 flex-grow'>
                    {/* Placeholder Image */}
                    <div className='rounded-md bg-slate-200 h-[150px] w-full'></div>

                    {/* Placeholder Content */}
                    <div className='flex-1 space-y-4 py-2'>
                        <div className='flex items-center space-x-4'>
                            <div className='rounded-full bg-slate-700 h-10 w-10'></div>
                            <div className='flex-1 space-y-3'>
                                <div className='h-2 bg-slate-700 rounded'></div>
                                <div className='h-2 bg-slate-700 rounded'></div>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='h-2 bg-slate-700 rounded col-span-2'></div>
                                <div className='h-2 bg-slate-700 rounded col-span-1'></div>
                            </div>
                            <div className='h-2 bg-slate-700 rounded'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
