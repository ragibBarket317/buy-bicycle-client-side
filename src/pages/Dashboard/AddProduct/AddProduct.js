import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/cycles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Add Successfully')
                    reset();
                }
            })
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="py-3 p-5" style={{ width: "50%" }}>
                <h3 className="text-center mb-4">Add A New Product</h3>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 mb-2 px-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Title" {...register("title")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="User Rating" {...register("userRating")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Rating" {...register("rating")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Price" {...register("price")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Image" {...register("img")} />
                    <br />
                    <input className="btn btn-primary w-100" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;