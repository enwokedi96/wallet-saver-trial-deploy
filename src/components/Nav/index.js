import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import About from '../About';
import FAQs from '../FAQs';
import './index.css';

{/*<div className='d-flex menu-container' id='bar'>
          <a className='me-auto p-2 navbar-brand'><img src="/pictures/icon2.png"/><strong>Wallet Saver</strong></a>
        
            <ul className='d-flex'>
          <li className='right-menu p-2'><a>Compare Stores</a></li>
          <li className='right-menu p-2'><a>Individual Stores</a></li>
        </ul>
      </div>*/}

function Nav (props) {

    return (
      
      <nav className="navbar navbar-expand-md navbar-light" id='bar'>
        <div className="container-fluid ">
        {/* <NavLink to="/" className="m-1 mt-0 mb-0">
            <img src="/WalletSavers.png" width="40" height="40" 
                    className="d-inline-block align-center" alt="navigation-bar" />
        </NavLink> */}
        <NavLink to="/" className="me-auto p-0 navbar-brand">
          <img src="/pictures/icon2.png"/><strong>Wallet Saver</strong>
        </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mb-lg-0">
                <li className="nav-item"> 
                    <NavLink
                      to="search/stores"
                      className={({ isActive }) =>
                        isActive ? 'right-menu nav-link active' : 'right-menu nav-link'}>
                      Individual Stores
                    </NavLink>
                </li>
                <li className="nav-item"> 
                    <NavLink
                        to="search/stores/compare"
                        className={({ isActive }) =>
                        isActive ? 'right-menu nav-link active' : 'right-menu nav-link'}>
                        Compare Stores
                    </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="faq"
                    className={({ isActive }) =>
                    isActive ? 'right-menu nav-link active' : 'right-menu nav-link'}>
                        <FAQs showFAQ={props.showFAQ}
                            handleFAQShow={props.handleFAQShow}
                            handleFAQClose={props.handleFAQClose}/>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="about"
                    className={({ isActive }) =>
                    isActive ? 'right-menu nav-link active' : 'right-menu nav-link'}>
                        <About showAbout={props.showAbout}
                            handleAboutShow={props.handleAboutShow}
                            handleAboutClose={props.handleAboutClose}/> 
                    </NavLink>
                </li> 
            </ul>
          </div>
        </div>
        
      </nav>
    );

}

export default Nav;