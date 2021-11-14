import React from 'react';
import fb from '../../../images/1482589369.svg'
import twitter from '../../../images/twitter-icon-circle-blue-logo-preview-400x400.png'
import youtube from '../../../images/youtube.png'

const Footer = () => {
    return (
        <div style={{ paddingTop: "80px" }} className="bg-dark text-white">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 col-md-4">
                        <h3 className="mb-3">Useful Links</h3>
                        <li className="mb-2 fw-bolder">About us</li>
                        <li className="mb-2 fw-bolder">Our community</li>
                        <li className="mb-2 fw-bolder">Local events</li>
                        <li className="mb-2 fw-bolder">Privacy police</li>
                        <li className="mb-2 fw-bolder">Service plus</li>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="mb-3">Our Shop</h3>
                        <li className="mb-2 fw-bolder">Bikes & parts</li>
                        <li className="mb-2 fw-bolder">Bike for rent</li>
                        <li className="mb-2 fw-bolder">Booking form</li>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="mb-3">Subscribe</h3>
                        <div>
                            <input type="email" name="" id="" />
                            <input type="submit" />
                        </div>
                        <div className="mt-3">
                            <img style={{ width: "50px" }} src={fb} alt="" />
                            <img style={{ width: "50px" }} src={twitter} alt="" />
                            <img style={{ width: "50px" }} src={youtube} alt="" />
                        </div>
                    </div>
                </div>
                <div className="border-top py-3 text-center">
                    <p>copyright@ragib</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;