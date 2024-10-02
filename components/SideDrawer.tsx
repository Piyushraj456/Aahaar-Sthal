"use client"
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogTitle, IconButton } from '@mui/material';

const BASE_URL_PHOTO = "https://maps.gomaps.pro/maps/api/place/photo?maxwidth=400";

const handleShare = (platform:any, place:any) => {
  const shareText = `Check out this place: ${place.name}, ${place.formatted_address} - Rated ${place.rating} stars.`;
  const placeUrl = `https://www.google.com/maps/place/?q=place_id:${place.place_id}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(placeUrl);

  let shareUrl = '';
  switch (platform) {
    case 'whatsapp':
      shareUrl = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      break;
    default:
      return;
  }
  window.open(shareUrl, '_blank');
};

const ShareDialog = ({ open, onClose, place }) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle>
      Share via
      <IconButton aria-label="close" onClick={onClose} style={{ float: 'right' }}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <div className="flex justify-center gap-6 p-4">
      <IconButton onClick={() => handleShare('whatsapp', place)} style={{ color: '#25D366' }}>
        <WhatsAppIcon className='text-5xl' />
      </IconButton>
      <IconButton onClick={() => handleShare('twitter', place)} style={{ color: 'black' }}>
        <XIcon className='text-4xl' />
      </IconButton>
      <IconButton onClick={() => handleShare('facebook', place)} style={{ color: '#4267B2' }}>
        <FacebookIcon className='text-5xl' />
      </IconButton>
    </div>
  </Dialog>
);

const SideDrawer = ({ place, close }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const photo_link = place?.photos?.[0]?.photo_reference
    ? `${BASE_URL_PHOTO}&photo_reference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`
    : '/placeholder-image.png';

  return (
    <div className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20 sticky'>
      <div className='text-right'><button onClick={close}><CloseIcon className='text-3xl' /></button></div>
      <div>
        <Typography variant="h6" className="font-semibold text-left">
          {place.name}
        </Typography>
        <img
          src={photo_link}
          alt={place.name}
          className="w-full h-[170px] object-cover rounded-t-xl"
        />
        <div className='flex justify-center mt-2'>
          <LocationOnIcon fontSize="small" className='text-orange-500 mt-3' />
          <Typography variant="body2" className="text-gray-400 text-left">
            {place.formatted_address}
          </Typography>
        </div>
      </div>
      <div className='flex mt-4'>
        <StarBorderIcon fontSize="small" className='text-orange-500' />
        <Typography variant="body2" className="text-gray-400 ml-1">
          {place.rating} ({place.user_ratings_total})
        </Typography>
      </div>
      <div className='flex gap-6 mt-4'>
        <button
          className="text-white p-2 text-center bg-orange-600 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => window.open(`https://www.google.com/maps/place/?q=place_id:${place.place_id}`, '_blank')}
        >
          <MapIcon /> View on Maps
        </button>
        <Button
          className="text-white p-2 text-center bg-orange-600 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          onClick={handleClickOpen}
        >
          <ShareIcon /> Share
        </Button>
      </div>
      <div className='mt-3'>
        <iframe
          width={450}
          height={250}
          className='w-full h-[220px] rounded-lg'
          loading="lazy"
          src={`https://maps.gomaps.pro/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}&q=${place.formatted_address}`}>
        </iframe>
      </div>

      {/* Share dialog */}
      <ShareDialog open={open} onClose={handleClose} place={place} />
    </div>
  )
}

export default SideDrawer;
