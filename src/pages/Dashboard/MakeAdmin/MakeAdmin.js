import { Alert, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://vast-tundra-91484.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setAdminSuccess(data)
                }

            })
        e.preventDefault()
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ paddingBottom: "8px", fontWeight: "bolder" }}>Create An Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    style={{ width: "25%" }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <Box sx={{ py: 3 }}>
                    <Button type="submit" variant="contained">Create Admin</Button>
                </Box>
                {adminSuccess && <Alert severity="success">Admin Created successfully!</Alert>}

            </form>
        </div>
    );
};

export default MakeAdmin;