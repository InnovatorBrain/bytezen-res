import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaSpotify, FaTwitter } from 'react-icons/fa';

import './Footer.css';
import images from '../../constants/images';

const Footer = () => {
  return (
    <>
      <div className="Footer_Container">
        <div className="Footer_AboutUs_Section">
          <ul>
            <li className='Footer_AboutUs_title'>
              About Us
            </li>
            <li><Link to="/about">About Us Overview</Link></li>
            <li><Link to="/leadership">Leadership Team</Link></li>
            <li><Link to="/values">Values In Action</Link></li>
            <li><Link to="/investor">Investor Relations</Link></li>
            <li><Link to="/news">News & Notifications</Link></li>
          </ul>
        </div>
        <div className="Footer_Services_Section">
          <ul>
            <li className="Footer_Services_title">
              Services
            </li>
            <li><Link to="/services">Services Overview</Link></li>
            <li><Link to="/mobile-order">Mobile Order & Pay</Link></li>
            <li><Link to="/trending">Trending Now</Link></li>
            <li><Link to="/delivery">Delivery®</Link></li>
            <li><Link to="/cafe">Café®</Link></li>
            <li><Link to="/playplaces">PlayPlaces & Parties</Link></li>
            <li><Link to="/merchandise">Merchandise</Link></li>
          </ul>
        </div>
        <div className="Footer_ContactUs_Section">
          <ul>
            <li className="Footer_ContactUs_title">
              ContactUs
            </li>
            <li><Link to="/contact">Contact Us Overview</Link></li>
            <li><Link to="/gift-card">Gift Card FAQs</Link></li>
            <li><Link to="/donations">Donations</Link></li>
            <li><Link to="/employment">Employment</Link></li>
            <li><Link to="/faq">Frequently Asked<br />Questions</Link></li>
          </ul>
        </div>
        <div className="Footer_Images_Section">
          <Link to="">
            <img src={images.AppStoreImageOne} alt="VisualOne" className='appStoreImageOne' /></Link>
          <Link to="">
            <img src={images.AppStoreImageTwo} alt="VisualTwo" className='appStoreImageTwo' /></Link>
        </div>

      </div>
      <div className="Footer_SocialMedia_Section_cont">
        <div className="Footer_SocialMedia_Section">
          <ul className='Footer_SocialMedia_Ul'>
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.spotify.com">
                <FaSpotify />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <li className='AllRightReserve'>© 2017 - 2023 ByteZen. All Rights Reserved</li>

      </div>
    </>
  );
}

export default Footer;
