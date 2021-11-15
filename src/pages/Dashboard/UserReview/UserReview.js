import React from 'react';
import { useForm } from "react-hook-form";

const UserReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/review', {
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
                <h3 className="text-center mb-4">Review</h3>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 mb-2 px-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Work" {...register("work")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Review" {...register("text")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="Image" {...register("img")} />
                    <br />
                    <input className="btn btn-primary w-100" type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default UserReview;