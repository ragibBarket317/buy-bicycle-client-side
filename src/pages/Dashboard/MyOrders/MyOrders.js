import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        fetch(`https://vast-tundra-91484.herokuapp.com/purchase?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    const handleDeleteUser = id => {
        const deleting = window.confirm('Are you sure, you want to delete?');
        if (deleting) {
            fetch(`https://vast-tundra-91484.herokuapp.com/purchase/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted.')
                        const remainingUser = myOrders.filter(user => user._id !== id);
                        setMyOrders(remainingUser);
                    }
                })
        }
    }
    return (
        <div>
            <h1>My Orders: {myOrders.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteUser(row._id)} variant="contained">Cancel</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;