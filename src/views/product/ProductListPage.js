import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import ProductLIstContainer from '../../containers/ProductContainer/ProductLIstContainer';

const products = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'http://test.indiaindex.com/images/1/thumbnail.jpg',
    images: [
      'http://test.indiaindex.com/images/1/1.jpg',
      'http://test.indiaindex.com/images/1/2.jpg',
      'http://test.indiaindex.com/images/1/3.jpg',
      'http://test.indiaindex.com/images/1/4.jpg',
      'http://test.indiaindex.com/images/1/thumbnail.jpg',
    ],
  },
  // Add more products as needed
];

const ProductListPage = () => {
 
  return (
   < ProductLIstContainer/>
  );
};

export default ProductListPage;
