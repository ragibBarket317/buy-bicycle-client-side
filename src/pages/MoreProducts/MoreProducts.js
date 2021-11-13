import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import backImg from '../../images/more-product.jpg'
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import AllProduct from './AllProduct/AllProduct';
import './MoreProducts.css'

const MoreProducts = () => {
    const [allCycle, setAllCycle] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cycles')
            .then(res => res.json())
            .then(data => setAllCycle(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div style={{ backgroundColor: "#F0F2F2", paddingBottom: "40px" }}>
                <div>
                    <img style={{ height: '65vh' }} className="w-100" src={backImg} alt="" />
                </div>
                <Container>
                    <h1 className="text-center py-5 fw-bolder">Our All Collection</h1>
                    <Row>
                        {
                            allCycle.map(cycle => <AllProduct
                                key={cycle._id}
                                cycle={cycle}
                            ></AllProduct>)
                        }
                    </Row>
                </Container>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MoreProducts;