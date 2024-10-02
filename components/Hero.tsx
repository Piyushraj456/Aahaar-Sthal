"use client";

import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import category from "@/data/category";
import Places from "./Places";

interface Location {
    lat: number | null;
    lng: number | null;
}

const Hero: React.FC = () => {
    const [placeList, setPlaceList] = useState<any[]>([]); // Specify type for placeList
    const [searchQuery, setSearchQuery] = useState<string>(""); // Specify type for searchQuery
    const [location, setLocation] = useState<Location>({ lat: null, lng: null }); // Specify type for location
    const [loading, setLoading] = useState<boolean>(false); // Loading state

    useEffect(() => {
        // Get user location on mount
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lng: longitude }); // Save user location
                    getPlaces(`restaurants near me`, latitude, longitude); // Fetch places based on location
                },
                (error) => {
                    console.error("Error obtaining location:", error);
                    getPlaces(); // Fallback to default query if location access fails
                }
            );
        } else {
            getPlaces(); // Fallback to default query if Geolocation is not supported
        }
    }, []);

    const getPlaces = async (query: string = "Hotel in Mumbai", lat: number | null = null, lng: number | null = null) => {
        setLoading(true); // Set loading to true before fetching
        const result = await fetch(`/api/google-place-api?q=${query}${lat && lng ? `&lat=${lat}&lng=${lng}` : ''}`);
        const data = await result.json();
        console.log(data.resp.results);
        setPlaceList(data.resp.results);
        setLoading(false); // Set loading to false after data is fetched
    };

    // Handle search input change
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        if (searchQuery) {
            getPlaces(searchQuery, location.lat, location.lng); // Pass location to the search
            setSearchQuery(""); // Reset input value
        }
    };

    // Handle category click
    const handleCategoryClick = (categoryName: string) => {
        getPlaces(`${categoryName} near me`, location.lat, location.lng); // Search for selected category
    };

    return (
        <div className="relative text-center h-screen">
            <div className="relative h-full">
                <img
                    src="/hero4.jpg"
                    alt="hero-img"
                    className="w-full h-full object-cover opacity-30 absolute top-0 left-0"
                />
                <div className="relative z-10 pt-36">
                    <h1 className="text-5xl tracking-widest font-semibold">
                        Aahaar<span className="text-orange-500 font-bold">Sthal</span>
                    </h1>
                    <h2 className="text-xl text-orange-400">Your own Cuisine</h2>
                    <div className="mt-5 z-20 flex justify-center gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            className="z-20 bg-white p-3 border-[1px] rounded-3xl px-5 w-[36%] shadow-sm outline-none"
                        />
                        <button 
                            className="bg-orange-500 rounded-full p-3 shadow-md text-white z-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            onClick={handleSearch}
                        >
                            <SearchIcon />
                        </button>
                    </div>
                    {/* ----------Category--------------- */}
                    <div className="mt-10 flex flex-col items-center">
                        <h2 className="mb-4 text-lg font-semibold">Browse Category</h2>
                        <div className="grid grid-cols-3 gap-10 md:gap-0 md:grid-cols-6 w-[80%] mx-auto justify-items-center">
                            {category.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="flex items-center justify-center border-[1px] rounded-full h-10 w-10 bg-orange-400 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-black cursor-pointer"
                                    onClick={() => handleCategoryClick(item.name)} // Add click handler
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                        {/* Pass loading state to Places component */}
                        <Places placeList={placeList} loading={loading} /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
