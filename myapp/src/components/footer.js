import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import telephone from "../assets/images/telephone.png"
import whatsapp from "../assets/images/whatsapp.png"
import instagram from "../assets/images/instagram.png"


export default function Footer() {

  const phoneNumber = "918680985079";
  const message = "Hi";
  const encodedMessage = encodeURIComponent(message);

  return (
    <>
      <footer>
        <div className='container'>
          <div className='row' >
            <div className='col-lg-12 text-center pt-4'>
              © {new Date().getFullYear()} <Link to="/" className='footer_lnk'> MMT Resorts</Link>. All Rights Reserved.
            </div>
            <div className='col-lg-12 text-center py-4'>
              <ul className='footer_icon' >
                <li>
                  <a href="tel:+91" target='_blank'>
                  <i class="fa-solid fa-phone"></i>
                    {/* <img src={telephone} className='img-fluid' alt='call' /> */}
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/chennai_luxury_villa/?igsh=anpsM3o1ODkzdnB4" target='_blank'>
                    {/* <img src={instagram} className='img-fluid' alt='call' /> */}
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} target='_blank'>
                    <i class="fa-brands fa-whatsapp"></i>
                    {/* <img src={whatsapp} className='img-fluid' alt='call' /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div class="social">
        <ul>
          <li>
            <a href="tel:+91" target='_blank'>Phone
              <span className='bg' >
                <span className='im p-0'> <img src={telephone} className='img-fluid' alt='call' /></span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/chennai_luxury_villa/?igsh=anpsM3o1ODkzdnB4" target='_blank'>Instagram
              <span className='bg' >
                <span className='im p-0'>
                  <img src={instagram} className='img-fluid' alt='call' />
                  {/* <i class="fa-brands fa-instagram"></i> */}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} target='_blank'>Whats app
              <span className='bg' >
                <span className='im p-0'>
                  {/* <i class="fa-brands fa-whatsapp"></i> */}
                  <img src={whatsapp} className='img-fluid' alt='call' />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}




