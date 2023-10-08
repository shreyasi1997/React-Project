import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../../Redux/AllSlice/Product/ProductSlice';
import './Addwish.css';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.products.wishlist) || [];
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className='wish'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='500px'
      >
        {wishlist.length === 0 ? (
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <img
                      src='assets/empty-wish.gif'
                      alt='Empty Wishlist'
                      style={{ width: '200px', height: '200px' }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    Wishlist is empty.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wishlist.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img
                        src={product.image_url}
                        alt={product.name}
                        style={{ width: '80px', height: '80px' }}
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>₹{product.price}</TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='error'
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
};

export default Wishlist;