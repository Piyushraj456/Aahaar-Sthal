"use client";
import React, { useState, useEffect } from 'react';
import PlaceCard from './PlaceCard';
import Skeleton from './Skeleton'; // Ensure the path is correct
import SideDrawer from './SideDrawer';
import Footer from './Footer';

interface PlacesProps {
    placeList: any[]; // Define the type for placeList
    loading: boolean; // Accept loading as a prop
}

const Places: React.FC<PlacesProps> = ({ placeList, loading }) => {
    const [selectPalace, setSelectPalace] = useState<any>(null);
    const [localLoading, setLocalLoading] = useState<boolean>(loading); // Local loading state

    useEffect(() => {
        setLocalLoading(loading); // Update local loading state when loading prop changes
    }, [loading]);

    return (
        <div>
            <div className='px-[10px] md:px-[120px] mt-7 relative'>
                <h2 className='text-[20px] font-bold mb-4'>
                    Search Results
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {localLoading ? (
        // Show skeletons while loading
        [1, 2, 3, 4, 5, 6, 7].map((_, id) => (
            <div key={id} className="w-full"> {/* Ensure each skeleton occupies full width */}
                <Skeleton />
            </div>
        ))
    ) : (
        placeList.length > 0 ? (
            placeList.map((place: any, index: number) => (
                <div key={index} onClick={() => setSelectPalace(place)}>
                    <PlaceCard place={place} />
                </div>
            ))
        ) : (
            <div className="col-span-full text-center">No results found.</div>
        )
    )}
</div>
                {selectPalace && (
                    <div className='fixed top-0 right-0 z-30'>
                        <SideDrawer place={selectPalace} close={() => setSelectPalace(null)} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Places;
