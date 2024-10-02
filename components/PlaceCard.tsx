"use client";
import React from 'react';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const BASE_URL_PHOTO = "https://maps.gomaps.pro/maps/api/place/photo?maxwidth=400";

const PlaceCard = ({ place }: any) => {
  const placeholderImage = "/placeholder-image.png"; 

  // Safely get photo reference or use placeholder
  const photoReference = place?.photos?.[0]?.photo_reference || "";
  const photo_link = photoReference
    ? `${BASE_URL_PHOTO}&photo_reference=${photoReference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`
    : placeholderImage;

  // Safely handle formatted address and title
  const address = place?.formatted_address
    ? place.formatted_address.split(' ').slice(0, 10).join(' ')
    : "Address not available";

  const title = place?.name 
    ? place.name.split(' ').slice(0, 3).join(' ')
    : "Place not available";

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 m-2 flex flex-col
     transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-orange-400
    ">
      <img
        src={photo_link}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="mt-2">
        <Typography variant="h6" className="font-semibold text-left">
          {title}
        </Typography>
        <div className="flex items-center">
          <LocationOnIcon fontSize="small" className='text-orange-500' />
          <Typography variant="body2" className="text-gray-400 text-left">
            {address} {/* Display the limited address here */}
          </Typography>
        </div>
        <div className="flex items-center mt-1">
          <StarBorderIcon fontSize="small" className='text-orange-500' />
          <Typography variant="body2" className="text-gray-400 ml-1">
            {place?.rating ? place.rating : "N/A"} ({place?.user_ratings_total || "0"})
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
