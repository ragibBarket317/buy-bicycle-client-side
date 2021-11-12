import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import AddressBar from '../AddressBar/AddressBar';
import Banner from '../Banner/Banner';
import BikeRepair from '../BikeRepair/BikeRepair';
import OurCollection from '../OurCollection/OurCollection';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AddressBar></AddressBar>
            <OurCollection></OurCollection>
            <BikeRepair></BikeRepair>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;