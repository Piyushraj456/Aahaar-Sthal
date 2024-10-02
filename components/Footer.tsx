import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-white text-center w-full">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="mb-6 md:mb-0 mt-3 text-center">
                        <h3 className="text-lg font-semibold">Aahaar <span className='text-orange-500'>Sthal</span></h3>
                        <p className='w-80 mt-2 mx-auto'>
                            Your one-stop destination for delicious meals and culinary experiences. At Aahaar Sthal, we believe that every meal should be a celebration of flavor and freshness. Our menu is a delightful blend of traditional and contemporary dishes, crafted with the finest ingredients sourced locally.
                        </p>
                    </div>

                    <div className="mb-6 md:mb-0 mt-3 flex flex-col items-center">
                        <h4 className="font-semibold">Quick Links</h4>
                        <ul className="list-none p-0 space-y-4 text-center">
                            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
                            <li><a href="#products" className="hover:text-gray-200">Products</a></li>
                            <li><a href="#about" className="hover:text-gray-200">About Us</a></li>
                            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 mt-6 flex flex-col items-center">
                        <h4 className="font-semibold">Contact Us</h4>
                        <ul className="list-none p-0 space-y-4 text-center">
                            <li className="flex justify-center"><EmailIcon /> <span className="ml-2">vrnpiyush.work@gmail.com</span></li>
                            <li className="flex justify-center"><LocalPhoneIcon /> <span className="ml-2">+91 6204xxxx32</span></li>
                            <li className="flex justify-center"><LocationOnIcon /> <span className="ml-2">Noida, India</span></li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h4 className="font-semibold mt-20">Follow Us</h4>
                        <div className="flex space-x-4 gap-5 justify-center">
                            <a href="#" aria-label="Facebook" className="hover:text-gray-200">
                                <Facebook className='text-4xl' />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-gray-200">
                                <Twitter className='text-4xl' />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-gray-200">
                                <Instagram className='text-4xl' />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-gray-200">
                                <LinkedIn className='text-4xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 border-t border-white pt-4">
                    <p>&copy; 2024 All Rights Reserved</p>
                    <div className="mt-2">
                        <span>Made with ❤️ by Piyush Raj</span>
                    </div>
                    <a href="#privacy-policy" className="hover:text-gray-200">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
