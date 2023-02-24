import React from 'react';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer=() =>{
  return (
<div className="container-fluid">
  <div className="footer">
    <div className="row">
        <div className="col-md-4">
            {/* <h4>Wallet Saver</h4> */}
            <img src="/pictures/icon2.png" className="iconImage" alt='logo'/>
            <p className='logo-text'>Save More .. Shop More</p>
        </div>

        {/* <div className="col-md-3">
            <h5><b>About Us<div className="textUnderline"><span></span></div>
                           <div className="textUnderline"><span></span></div>
                           <div className="textUnderline"><span></span></div>
                </b></h5>
        </div> */}
            
        <div className="col-md-4">
            <h5><b>Contact Us<div className="textUnderline"><span></span></div>
                             <div className="textUnderline"><span></span></div>
                             </b></h5>
                <ul className="list-unstyled">
                    <li><FontAwesomeIcon icon={faHome}/>&emsp;Edx Bootcamp,&nbsp;</li>
                    <li>&emsp;&emsp;&emsp;United Kingdom</li>
                    <li><FontAwesomeIcon icon={faPhone}/>&ensp;123-456-789</li>
                </ul>
        </div>


        <div className="col-md-4 social-media-icons ">
            <h5><b>Follow Us<div className="textUnderline"><span></span></div>
            <div className="textUnderline"><span></span></div>
            <div className="textUnderline"><span></span></div>
            </b></h5>
            <div>
            <a href='https://facebook.com'>
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href='https://instagram.com'>
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href='https://twitter.com'>
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href='https://github.com'>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            </div>
        </div>

                </div>
                <div className="footer-area p-1">
                    <div className="footer-text">
                        <p className="copy-right">©2023 Edx Bootcamp Group-07 | All Rights Reserved</p>
                        {/* <p className="copy-right">Save More & Shop More with Wallet Saver</p> */}
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Footer;
