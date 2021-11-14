import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const PurchaseNow = (props) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Order Successful')
                    reset();
                }
            })
    }
    return (
        <div className="shadow-sm p-5">
            <h3 className="text-center mb-4">Booking Your Bicycle</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-100 mb-2 px-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <input className="w-100 mb-2 px-2" type="email" placeholder="email" {...register("email")} />
                <input className="w-100 mb-2 px-2" type="text" placeholder="product-name" {...register("productName")} />
                <input className="w-100 mb-2 px-2" type="text" placeholder="address" {...register("address")} />
                <input className="w-100 mb-2 px-2" type="text" placeholder="number" {...register("phone")} />
                <input className="w-100 mb-2 px-2" type="number" {...register("number")} />
                <br />
                <div className="text-center">
                    <input className="btn btn-danger w-100" type="submit" value="Purchase Now" />
                </div>
            </form>
        </div>
    );
};

export default PurchaseNow;